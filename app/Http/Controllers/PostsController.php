<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\DB;

class PostsController extends Controller
{
    public function show()
    {
    	$posts = DB::table('posts')->latest()->get();

    	return view('posts',['posts' => $posts, 'title' => 'posts']);
    }

    public function create()
    {
        return view('create',['title' => 'create']);
    }

    public function store(Request $request)
    {
	DB::table('posts')->insert([
		'username' => $request->username,
		'posts' => $request->posts,
        'created_at' => now(),
        'updated_at' => now()
	]);
	return redirect('/posts');

}
}
