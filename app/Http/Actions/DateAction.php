<?php

namespace App\Http\Actions;

use Carbon\Carbon;

class DateAction {
    public static function getDateFromTimestamp(int $timestamp, string $format = null, string $timezone = null) {
        if ($timezone === null) {
            $timezone = auth()->user()->timezone;
        }

        if ($format === null) {
            $format = 'd.m.Y H:i';
        }

        return Carbon::createFromTimestamp($timestamp)->timezone($timezone)->format($format);
    }
}
