<?php

namespace App\Http\Resources;

use App\Http\Services\DateService;
use Illuminate\Http\Resources\Json\JsonResource;

class MessageResource extends JsonResource
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
            'id'        => $this->id,
            'text'      => $this->text,
            'incUserId' => $this->inc_user_id,
            'isRead'    => $this->is_read,
            'createdAt' => DateService::getDateFromTimestamp($this->created_at, 'H:i'),
        ];
    }
}
