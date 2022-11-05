<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request) {
        $fields = $request->validate([
            'email'    => 'required|email',
            'password' => 'required|min:8',
        ]);
        $success = false;
        $errors = false;

        $user = User::login($fields['email'], $fields['password']);

        if ($user !== null) {
            Auth::guard()->attempt($request->only('email', 'password'), true);
            $success = true;
        }

        return response([
            'success' => $success,
            'data'    => $user,
            'errors'  => $errors,
        ]);
    }
}
