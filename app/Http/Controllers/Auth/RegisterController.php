<?php

namespace App\Http\Controllers\Auth;

use App\Http\Services\DateService;
use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(RegisterRequest $request) {
        $fields = $request->validated();

        $createdAt = DateService::getNowTimestamp();

        $user = User::create([
            'nickname'   => $fields['nickname'],
            'email'      => $fields['email'],
            'password'   => Hash::make($fields['password']),
            'timezone'   => $fields['userTimezone'],
            'updated_at' => $createdAt,
            'created_at' => $createdAt,
        ]);

        if (Auth::attempt($request->only('email', 'password'), true)) {
            $request->session()->regenerate();
        }

        return response([
            'success' => true,
            'data'    => $user,
            'token'   => $user->createToken('userToken')->plainTextToken,
        ]);
    }
}
