# UOY - University of You

A modern, anonymous post-sharing platform built with Laravel 11 and optimized for PHP 8.3+.

## Features

- **Anonymous Posting**: Share thoughts and experiences without registration
- **Modern UI**: Clean, responsive design with smooth animations
- **Rate Limiting**: Prevents spam with intelligent rate limiting
- **Optimized Performance**: Database indexing and Eloquent ORM
- **Pagination**: Efficient loading of posts
- **Validation**: Comprehensive input validation and sanitization

## Tech Stack

- **Backend**: Laravel 11.46+ (PHP 8.3+)
- **Frontend**: Vite, Custom CSS with modern design system
- **Database**: MySQL 5.7+
- **Assets**: Vite for fast builds and HMR

## Requirements

- PHP >= 8.3
- Composer
- Node.js >= 18
- MySQL >= 5.7

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "UOY (L8)"
```

2. Install PHP dependencies:
```bash
composer install
```

3. Install Node dependencies:
```bash
npm install
```

4. Copy environment file:
```bash
cp .env.example .env
```

5. Generate application key:
```bash
php artisan key:generate
```

6. Configure your database in `.env`:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=uoy
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

7. Run migrations:
```bash
php artisan migrate
```

8. (Optional) Seed sample data:
```bash
php artisan db:seed --class=PostsSeeder
```

9. Build assets:
```bash
npm run build
```

10. Start the development server:
```bash
php artisan serve
```

Visit `http://localhost:8000` to see the application.

## Development

For development with hot module replacement:

```bash
# Terminal 1
npm run dev

# Terminal 2
php artisan serve
```

## Key Improvements Made

### Backend Optimization
- ✅ Migrated to Laravel 11 with full PHP 8.3 support
- ✅ Replaced raw SQL queries with Eloquent ORM
- ✅ Added comprehensive validation rules
- ✅ Implemented rate limiting (5 posts per 5 minutes per IP)
- ✅ Added database indexes for performance
- ✅ Proper error handling and feedback

### Frontend Modernization
- ✅ Migrated from Laravel Mix to Vite
- ✅ Custom modern CSS design system
- ✅ Responsive mobile-first design
- ✅ Smooth animations and transitions
- ✅ Clean, uncluttered interface
- ✅ Removed unused Bootstrap files

### Security Enhancements
- ✅ Input validation and sanitization
- ✅ CSRF protection
- ✅ XSS prevention
- ✅ Rate limiting to prevent spam

### Code Quality
- ✅ PSR-12 coding standards
- ✅ Proper routing with named routes
- ✅ Clean controller methods
- ✅ Removed all unused files and dependencies

## Project Structure

```
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       ├── HomeController.php
│   │       └── PostsController.php
│   └── Models/
│       └── Posts.php
├── resources/
│   ├── css/
│   │   └── app.css (Modern custom styles)
│   ├── js/
│   │   └── app.js (Minimal JavaScript)
│   └── views/
│       ├── layouts/
│       │   └── main.blade.php
│       ├── home.blade.php
│       ├── posts.blade.php
│       └── create.blade.php
├── routes/
│   └── web.php (Clean, named routes)
└── vite.config.js (Modern asset compilation)
```

## License

This project is open-sourced software.