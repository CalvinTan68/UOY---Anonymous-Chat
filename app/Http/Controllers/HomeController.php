<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function home() {
        return view('home', ['title'=>'home']);
    }
}
