import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/app.css';

// Configure axios
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

// Layout Component
function Layout({ children }) {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-container">
                        <Link to="/" className="navbar-brand">UOY</Link>
                        <ul className="navbar-menu">
                            <li><Link to="/posts" className="navbar-link">Posts</Link></li>
                            <li><Link to="/write" className="btn btn-primary">New</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="main-content">
                <div className="container">
                    {children}
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px' }}>
                            © {new Date().getFullYear()} UOY - Anonymous thoughts
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

// Home Component
function Home() {
    return (
        <>
            <style>{`.main-content { overflow: hidden !important; }`}</style>
            <div className="compact-hero">
                <div>
                    <h1 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '20px', letterSpacing: '-1px' }}>
                        UOY
                    </h1>

                    <div style={{
                        maxWidth: '420px',
                        margin: '0 auto 24px',
                        padding: '16px',
                        background: 'var(--bg-primary)',
                        borderRadius: 'var(--radius)',
                        border: '1px solid var(--border)'
                    }}>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '8px' }}>
                            A minimalist platform for sharing anonymous thoughts, experiences, and stories.
                            No registration, no tracking, just pure expression.
                        </p>
                        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                            Write freely, read openly, connect anonymously.
                        </p>
                    </div>

                    <div className="hero-buttons">
                        <Link to="/posts" className="btn btn-secondary">Browse Posts</Link>
                        <Link to="/write" className="btn btn-primary">Start Writing</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

// Posts Component
function Posts() {
    const [posts, setPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [lastPage, setLastPage] = React.useState(1);

    React.useEffect(() => {
        fetchPosts();
    }, [currentPage]);

    const fetchPosts = async () => {
        try {
            const response = await axios.get(`/api/posts?page=${currentPage}`);
            setPosts(response.data.data);
            setLastPage(response.data.last_page);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching posts:', error);
            setLoading(false);
        }
    };

    const formatTime = (timestamp) => {
        if (!timestamp) return 'Recently';
        const date = new Date(timestamp);
        const now = new Date();
        const diff = Math.floor((now - date) / 1000);

        if (diff < 60) return 'just now';
        if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
        return `${Math.floor(diff / 86400)} days ago`;
    };

    if (loading) {
        return <div className="text-center" style={{ padding: '40px' }}>Loading...</div>;
    }

    return (
        <>
            <div className="page-header">
                <h1>Recent Posts</h1>
                <p>Anonymous thoughts from the community</p>
            </div>

            {posts.length > 0 ? (
                <>
                    {posts.map((post) => (
                        <div key={post.id} className="card post-card fade-in">
                            <div className="post-header">
                                <div className="post-author">
                                    <div className="author-avatar">
                                        {post.username.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="author-info">
                                        <span className="author-name">{post.username}</span>
                                        <span className="post-time">{formatTime(post.created_at)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="post-content">
                                {post.posts}
                            </div>
                        </div>
                    ))}

                    {lastPage > 1 && (
                        <div className="pagination">
                            {currentPage > 1 && (
                                <button
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    className="btn btn-secondary"
                                    style={{ padding: '6px 12px', height: 'auto' }}
                                >
                                    ‹
                                </button>
                            )}
                            <span style={{ margin: '0 12px', color: 'var(--text-secondary)' }}>
                                Page {currentPage} of {lastPage}
                            </span>
                            {currentPage < lastPage && (
                                <button
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    className="btn btn-secondary"
                                    style={{ padding: '6px 12px', height: 'auto' }}
                                >
                                    ›
                                </button>
                            )}
                        </div>
                    )}
                </>
            ) : (
                <div className="card">
                    <div className="empty-state">
                        <div className="empty-state-icon">📝</div>
                        <h3>No posts yet</h3>
                        <p>Be the first to share</p>
                        <Link to="/write" className="btn btn-primary">Create Post</Link>
                    </div>
                </div>
            )}
        </>
    );
}

// Create Post Component
function CreatePost() {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState('');
    const [content, setContent] = React.useState('');
    const [errors, setErrors] = React.useState({});
    const [submitting, setSubmitting] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setErrors({});

        try {
            await axios.post('/api/posts', {
                username: username,
                posts: content
            });
            navigate('/posts');
        } catch (error) {
            if (error.response?.data?.errors) {
                setErrors(error.response.data.errors);
            } else if (error.response?.data?.message) {
                setErrors({ general: error.response.data.message });
            }
            setSubmitting(false);
        }
    };

    return (
        <>
            <style>{`.main-content { overflow: hidden !important; }`}</style>
            <div className="compact-form">
                <div>
                    <div className="card" style={{ margin: 0 }}>
                        <h2 style={{ marginBottom: '16px', fontSize: '20px' }}>Write Something</h2>

                        {errors.general && (
                            <div className="alert alert-danger" style={{ marginBottom: '16px' }}>
                                {errors.general}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '12px' }}>
                                <input
                                    type="text"
                                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Your name (any name)"
                                    required
                                    autoFocus
                                />
                                {errors.username && (
                                    <div className="invalid-feedback">{errors.username[0]}</div>
                                )}
                            </div>

                            <div style={{ marginBottom: '16px' }}>
                                <textarea
                                    rows="3"
                                    className={`form-control ${errors.posts ? 'is-invalid' : ''}`}
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="What's on your mind?"
                                    required
                                    style={{ minHeight: '80px', resize: 'none' }}
                                />
                                {errors.posts && (
                                    <div className="invalid-feedback">{errors.posts[0]}</div>
                                )}
                            </div>

                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ flex: 1 }}
                                    disabled={submitting}
                                >
                                    {submitting ? 'Posting...' : 'Post'}
                                </button>
                                <Link to="/posts" className="btn btn-secondary" style={{ flex: 1 }}>
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>

                    <ul style={{
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)',
                        padding: '12px 16px',
                        marginTop: '16px',
                        fontSize: '13px',
                        listStylePosition: 'inside'
                    }}>
                        <li style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}>Be respectful and kind to others</li>
                        <li style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}>No hate speech, harassment, or bullying</li>
                        <li style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}>Keep personal information private</li>
                        <li style={{ color: 'var(--text-secondary)', marginBottom: '4px' }}>5 posts per 5 minutes limit</li>
                        <li style={{ color: 'var(--text-secondary)' }}>Maximum 5000 characters per post</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

// Main App Component
function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/write" element={<CreatePost />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

// Mount the app
if (document.getElementById('app')) {
    ReactDOM.createRoot(document.getElementById('app')).render(<App />);
}