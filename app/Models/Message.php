<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
