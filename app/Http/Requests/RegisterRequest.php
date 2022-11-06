<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'nickname'        => 'required|unique:users|max:25',
            'email'           => 'required|email|unique:users',
            'password'        => 'required|required_with:passwordConfirm|same:passwordConfirm|min:8',
            'passwordConfirm' => 'required|min:8',
            'userTimezone'    => 'required',
        ];
    }

    public function messages() {
        return [
            'required'        => 'Поле обязательно для заполнения',
            'nickname.unique' => 'Данный псевдоним уже занят',
            'email.unique'    => 'Данная электронная почта уже занята',
            'min'             => 'Минимальная длина поля :min символов',
            'max'             => 'Максимальная длина поля :max символов',
            'same'            => 'Значение полей не совпадает',
        ];
    }
}
