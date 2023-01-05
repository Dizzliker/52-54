<?php

namespace App\Models;

use App\Http\Resources\ChatResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'inc_user_id',
        'out_user_id',
        'text',
        'is_read',
        'updated_at',
        'created_at'
    ];

    public $timestamps = false;

    public static function getChat(int $companionId) {
        $userId = Auth::id();

        $messages = DB::select("
            select m.id message_id,
                   m.inc_user_id,
	               m.out_user_id,
	               m.text,
	               m.is_read,
	               m.created_at
              from messages m
            where (m.inc_user_id = {$userId} and m.out_user_id = {$companionId})
                  or (m.inc_user_id = {$companionId} and m.out_user_id = {$userId})
        ");

        return ChatResource::collection($messages);
    }
}
