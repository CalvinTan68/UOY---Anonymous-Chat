<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/posts', function (Request $request) {
    $posts = \App\Models\Posts::latest()->paginate(20);
    return response()->json($posts);
});

Route::post('/posts', function (Request $request) {
    $key = 'create-post:' . $request->ip();

    if (\Illuminate\Support\Facades\RateLimiter::tooManyAttempts($key, 5)) {
        $seconds = \Illuminate\Support\Facades\RateLimiter::availableIn($key);
        return response()->json([
            'message' => "Too many posts. Please wait {$seconds} seconds before posting again."
        ], 429);
    }

    $validated = $request->validate([
        'username' => 'required|string|max:255|min:2',
        'posts' => 'required|string|max:5000|min:1'
    ]);

    $post = \App\Models\Posts::create($validated);

    \Illuminate\Support\Facades\RateLimiter::hit($key, 300);

    return response()->json($post, 201);
});