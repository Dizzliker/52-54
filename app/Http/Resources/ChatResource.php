<?php

namespace App\Http\Resources;

use App\Http\Actions\DateAction;
use Illuminate\Http\Resources\Json\JsonResource;

class ChatResource extends JsonResource
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
            'incUserId' => $this->inc_user_id,
            'outUserId' => $this->out_user_id,
            'text'      => $this->text,
            'isRead'    => $this->is_read,
            'createdAt' => DateAction::getDateFromTimestamp($this->created_at)
        ];
    }
}
