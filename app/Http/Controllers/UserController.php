<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function getUserList() {
        return response([
            'success' => true,
            'errors'  => null,
            'data'    => User::getUserList()
        ]);
    }

    public function searchUserByNickname(Request $request) {
        $request->validate([
            'nickname' => 'string',
        ]);

        return response([
            'success' => true,
            'errors'  => null,
            'data'    => User::searchByNickname($request->nickname),
        ]);
    }
}
