<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(LoginRequest $request) {
        $fields = $request->validated();
        $response = [
            'success' => false,
            'data'    => (object) [],
            'errors'  => (object) [],
        ];

        $user = User::login($fields['email'], $fields['password']);

        if ($user === null) {
            $response['errors'] = (object) [
                'emailError'    => 'Неправильный логин или пароль',
                'passwordError' => 'Неправильный логин или пароль',
            ];
        } else {
            Auth::guard()->attempt($request->only('email', 'password'), $request->userRemember);
            $response['success'] = true;
            $response['data'] = $user;
        }

        return response($response);
    }
}
