<?php

namespace App\Models;

use App\Http\Resources\UserListResource;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
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

    public static function login(string $email, string $password) : User|null {
        $user = User::where('email', $email)->first();

        return $user && Hash::check($password, $user->password) ? $user : null;
    }

    public static function getUserList() {
        $userId = Auth::id();
        $users = DB::select("
            select u.id user_id,
                   u.nickname,
                   u.timezone,
	               u.avatar,
	               t.text,
	               t.created_at
              from (select row_number() over(partition by t.user_id order by t.created_at, t.message_id) row_count,
                           t.*
                      from (select case when m.inc_user_id = {$userId}
                                          then m.out_user_id
	                                    when m.out_user_id = {$userId}
			                              then m.inc_user_id
	                               end user_id,
	   				               m.id message_id,
       				               m.text,
	                               m.created_at
                              from messages m) t) t
                   join users u on u.id = t.user_id
             where t.row_count = 1
        ");

        return UserListResource::collection($users);
    }

    public static function searchByNickname(string $nickname) : UserResource {
        $users = DB::table('users', 'u')
                   ->where('u.nickname', 'like', "%{$nickname}%")
                   ->select('u.id',
                             'u.nickname',
                             'u.updated_at',
                             'u.created_at')
                   ->get();

        return UserResource::collection($users);
    }

    public static function getCompanionById(int $companionId) {
        return DB::table('users', 'u')
                 ->where('u.id', $companionId)
                 ->select('u.id as companionId',
                           'u.nickname',
                           'u.avatar')
                 ->get();
    }
}
