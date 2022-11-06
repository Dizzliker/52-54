<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use DateTimeImmutable;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(RegisterRequest $request) {
        $fields = $request->validated();

        $createdAt = User::getNowTimestamp();

        $user = User::create([
            'nickname'   => $fields['nickname'],
            'email'      => $fields['email'],
            'password'   => Hash::make($fields['password']),
            'timezone'   => $fields['userTimezone'],
            'updated_at' => $createdAt,
            'created_at' => $createdAt,
        ]);

        Auth::guard()->attempt($request->only('email', 'password'), true);
        
        return response(['success' => true, 'data' => $user]);
    }
}
