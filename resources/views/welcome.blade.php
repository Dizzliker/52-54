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
        
        <script src="{{asset('/js/app.js')}}"></script>
    </body>
</html>
