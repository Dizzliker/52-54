<?php

namespace App\Http\Resources;

use App\Http\Services\DateService;
use Illuminate\Http\Resources\Json\JsonResource;

class UserListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'userId'    => $this->user_id,
            'nickname'  => $this->nickname,
            'avatar'    => $this->avatar,
            'text'      => $this->text,
            'createdAt' => DateService::getDateFromTimestamp($this->created_at, 'H:i'),
        ];
    }
}
