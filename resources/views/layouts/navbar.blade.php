<nav class="navbar navbar-expand-lg sticky-top p-4">
    <div class="container">
      <a class="navbar-brand" href="/">UOY</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item px-3">
            <a class="nav-link {{ ($title === "home") ? 'active' : '' }}" href="/"><i class="bi bi-house"></i> Home</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link {{ ($title === "posts") ? 'active' : '' }}" href="/posts"><i class="bi bi-journal-text"></i> Posts</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link {{ ($title === "create") ? 'active' : '' }}" href="/create"><i class="bi bi-pencil-square"></i> Write</a>
          </li>
        </ul>
      </div>
    </div>
</nav>
