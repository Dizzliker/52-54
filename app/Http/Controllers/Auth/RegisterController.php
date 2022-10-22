<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request) {
        $fields = $request->validate([
            'nickname'        => 'required',
            'email'           => 'required|email|unique:users|min:9',
            'password'        => 'required_with:passwordConfirm|same:passwordConfirm|min:8',
            'passwordConfirm' => 'required|min:8',
        ]);

        $user = User::create([
            'nickname' => $fields['nickname'],
            'email'    => $fields['email'],
            'password' => Hash::make($fields['password']),
        ]);
    }
}
