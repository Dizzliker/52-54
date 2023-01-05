<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageRequest;
use App\Http\Resources\MessageResource;
use App\Http\Services\DateService;
use App\Models\Message;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Throwable;

class MessageController extends Controller
{
    public function sendMessage(MessageRequest $request) {
        try {
            $fields = $request->validated();
            $createdAt = DateService::getNowTimestamp();

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

    public function getChat($companionId) {
        try {
            return response([
                'success' => true,
                'errors'  => null,
                'data'    => Message::getChat($companionId),
                'payload' => User::getCompanionById($companionId)
            ]);

        } catch (Throwable $throw) {
            return response([
                'success' => false,
                'message' => $throw->getMessage(),
                'errors'  => (object) [
                    'chatError' => 'Ошибка при получении чата'
                ],
            ], 500);
        }
    }
}
