<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request) {
        $fields = $request->validate([
            'nickname'        => 'required|unique:users',
            'email'           => 'required|email|unique:users|min:9',
            'password'        => 'required_with:passwordConfirm|same:passwordConfirm|min:8',
            'passwordConfirm' => 'required|min:8',
        ]);

        $user = User::create([
            'nickname'   => $fields['nickname'],
            'email'      => $fields['email'],
            'password'   => Hash::make($fields['password']),
            'created_at' => now(),
        ]);

        Auth::guard()->attempt($request->only('email', 'password'), true);
        
        return response(['data' => $user]);
    }
}
