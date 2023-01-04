<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Throwable;

class LoginController extends Controller
{
    public function login(LoginRequest $request) {
        try {
            $fields = $request->validated();
            $response = [
                'success' => false,
                'data'    => null,
                'errors'  => null,
            ];

            $user = User::login($fields['email'], $fields['password']);

            if ($user === null) {
                $response['errors'] = (object) [
                    'emailError'    => 'Неправильный логин или пароль',
                    'passwordError' => 'Неправильный логин или пароль',
                ];
            } else {
                if (Auth::attempt($request->only('email', 'password'), $request->userRemember)) {
                    // $request->session()->regenerate();
                }
                $response['success'] = true;
                $response['data'] = $user;
                $response['token'] = $user->createToken('userToken')->plainTextToken;
            }

            return response($response);

        } catch (Throwable $throw) {
            return response([
                'success' => false,
                'message' => $throw->getMessage(),
                'errors'  => (object) [
                    'emailError' => 'Ошибка системы, пожалуйста, обновите страницу или повторите запрос позже'
                ],
            ], 500);
        }
    }
}
