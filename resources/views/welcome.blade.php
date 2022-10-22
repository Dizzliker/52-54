<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}">

        <title>52-54</title>

        <link rel="stylesheet" href="{{asset('/css/app.css')}}">
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet">
    </head>
    <body>
        <div id="root"></div>

        {{-- <div class="page">
            <div class="left-side">
                <span class="left-side__52">52</span>
                <img src="/images/whale.png" class="logo" alt="Whale logo" />
                <span class="left-side__54">54</span>
            </div>
            <div class="right-side">
                <form action="#" class="register-form" method="post">
                    <h3 class="header-3">Регистрация</h3>
                    <input type="text" class="input email error" name="email" placeholder="Ваша почта"/>
                    <input type="text" class="input nickname" name="nickname" placeholder="Ваш всевдоним"/>
                    <input type="password" class="input password" name="password" placeholder="Пароль"/>
                    <input type="password" class="input password-confirm" name="password-confirm" placeholder="Повторите пароль"/>

                    <label for="agreement-checkbox" class="agreement-container">
                        <input type="checkbox" id="agreement-checkbox" class="agreement-checkbox" name="user-agreement"/>
                        <span class="agreement-text">Я согласен с пользовательским соглашением</span>
                    </label>
                    
                    <button type="button" class="btn btn-primary">Зарегистрироваться</button>

                    <a href="/login" class="register-form__link link">У меня уже есть аккаунт</a>
                </form>
            </div>
        </div> --}}
        
        <script src="{{asset('/js/app.js')}}"></script>
    </body>
</html>
