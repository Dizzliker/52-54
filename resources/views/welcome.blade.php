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
            <div class="sidebar">
                <div class="sidebar__header">
                    <div class="sidebar__settings">
                        <img src="/images/settings.svg" alt="settings" />
                    </div>
                    <div class="sidebar__search">
                        <img src="/images/search.svg" alt="search" />
                        <input type="text" name="search" />
                    </div>
                </div>

                <div class="sidebar__users-container">
                    <div class="sidebar__user-container">
                        <img src="/images/avatar.jpg" class="sidebar__user-avatar" alt="Avatar">
                        <div class="sidebar__user-message">
                            <div class="sidebar__user-info">
                                <span class="sidebar__user-name">dizzliker</span>
                                <span class="sidebar__msg-time">12:43</span>
                            </div>
                            <span class="sidebar__msg-text">Привет как дела</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> --}}
        
        <script src="{{asset('/js/app.js')}}"></script>
    </body>
</html>
