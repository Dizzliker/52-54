<?php

namespace App\Exceptions;

use Illuminate\Validation\ValidationException;
use Throwable;
use Illuminate\Support\Arr;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function convertValidationExceptionToResponse(ValidationException $e, $request)
    {
        if($e instanceof ValidationException && $request->expectsJson()) {
            return response()->json([
                "status" => false,
                "errors" =>  $e->errors()
            ], 422);
        } else {
            parent::convertValidationExceptionToResponse($e, $request);
        }
    }


    public function convertExceptionToArray(Throwable $e)
    {
        return config('app.debug') ? [
            'status' => false,
            'messages' => [$e->getMessage()],
            'exception' => get_class($e),
            'file' => $e->getFile(),
            'line' => $e->getLine(),
            'trace' => collect($e->getTrace())->map(function ($trace) {
                return Arr::except($trace, ['args']);
            })->all(),
        ] : [
            'status' => false,
            'messages' => [$e->getMessage()],
        ];
    }
}
