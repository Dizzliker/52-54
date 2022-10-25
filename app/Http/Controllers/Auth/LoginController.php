<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index() {
        dd(User::all());
    }

    public function login(Request $request) {
        $fields = $request->validate([
            'email'    => 'required|email',
            'password' => 'required|min:8',
        ]);

        Auth::guard()->attempt($request->only('email', 'password'), true);
    }
}
