<?php

namespace App\Http\Resources;

use App\Actions\DateAction;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'id'         => $this->id,
            'nickname'   => $this->nickname,
            'updated_at' => DateAction::getDateFromTimestamp($this->updated_at),
            'created_at' => DateAction::getDateFromTimestamp($this->created_at),
        ];
    }
}
