@extends("layouts.main")

@section('contents')

<h3 class="text-center">Posts</h3>
<br>
    @foreach($posts as $p)
    <div class="card mx-auto">
        <div class="card-header">Posted by : {{ $p->username }}</div>
        <div class="card-body">
          <p class="card-text text-justify">{{ $p->posts }}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted"> Posted on : {{ $p->created_at }}</small>
        </div>
    </div>
    <br>
    @endforeach

@endsection
