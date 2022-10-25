<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use DateTimeImmutable;
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
            'userTimezone'    => 'required',
        ]);

        $createdAt = (new DateTimeImmutable())->getTimestamp();

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
