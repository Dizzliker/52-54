<?php

namespace App\Http\Services;

use Carbon\Carbon;

class DateService {
    public static function getDateFromTimestamp(int $timestamp, string $format = null, string $timezone = null) {
        if ($timezone === null) {
            $timezone = auth()->user()->timezone;
        }

        if ($format === null) {
            $format = 'd.m.Y H:i';
        }

        return Carbon::createFromTimestamp($timestamp)->timezone($timezone)->format($format);
    }

    public static function getNowTimestamp() : int {
        return (new DateTimeImmutable())->getTimestamp();
    }
}
