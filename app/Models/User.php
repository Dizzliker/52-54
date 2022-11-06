<?php

namespace App\Models;

use DateTimeImmutable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nickname',
        'email',
        'password',
        'timezone',
        'updated_at',
        'created_at',
    ];

    public $timestamps = false;

    protected $rememberTokenName = false;

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public static function login($email, $password) {
        $user = User::where('email', $email)->first();

        return $user && Hash::check($password, $user->password) ? $user : null;
    }

    public static function getNowTimestamp() {
        return (new DateTimeImmutable())->getTimestamp();
    }
}
