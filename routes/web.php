<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home', ["title" => "home"]);
});

Route::get('/posts','App\Http\Controllers\PostsController@show');

Route::get('/create','App\Http\Controllers\PostsController@create');
Route::post('/create','App\Http\Controllers\PostsController@store');
