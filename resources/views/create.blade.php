@extends("layouts.main")

@section('contents')

<h3 class="text-center">Write Your Post</h3>
<br>
<div class="card mx-auto">
    <div class="card-body">
        <form action="" method="post">
            @csrf
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" name="username" id="username" maxlength="20" required placeholder="username goes here">
                <small class="text-muted text-justify">We recommend to use the same username for every of your post to rewind your memories</small>
            </div>
            <div class="mb-3">
                <label for="posts" class="form-label">Content</label>
                <textarea id="posts" name="posts" class="form-control" rows="10" required placeholder="post content goes here"></textarea>
            </div>
            <p class="text-center text-danger" id="notice"></p>
            <button type="submit" class="btn btn-primary" name="post" id="post">Submit</button>
        </form>
    </div>
</div>
@endsection
