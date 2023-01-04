<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageRequest;
use App\Http\Resources\MessageResource;
use App\Models\Message;
use Illuminate\Support\Facades\Auth;
use Throwable;

class MessageController extends Controller
{
    public function sendMessage(MessageRequest $request) {
        try {
            $fields = $request->validated();
            $createdAt = Message::getNowTimestamp();

            $message = Message::create([
                'inc_user_id' => $fields['incUserId'],
                'out_user_id' => Auth::id(),
                'text'        => $fields['text'],
                'is_read'     => false,
                'updated_at'  => $createdAt,
                'created_at'  => $createdAt
            ]);

            return response([
                'success' => true,
                'errors'  => null,
                'data'    => new MessageResource($message),
            ]);

        } catch (Throwable $throw) {
            return response([
                'success' => false,
                'message' => $throw->getMessage(),
                'errors'  => (object) [
                    'messageError' => 'Ошибка при отправке сообщения'
                ],
            ], 500);
        }
    }
}
