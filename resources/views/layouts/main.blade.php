<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>UOY - Anonymous Post Sharing</title>

    <style>
        html
        {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        body
        {
            background-color: rgb(240, 240, 240);
        }
        .card
        {
            background: rgba(255, 255, 255, 0);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(8.7px);
            -webkit-backdrop-filter: blur(8.7px);
            border: 1px solid rgba(255, 255, 255, 0.17);
            width: 40vw;
        }
        .card input, .card textarea
        {
            background: rgb(255, 255, 255, 0.4);
        }
        @media (max-width: 768px)
        {
            .card
            {
                width: 80vw;
            }
        }
    </style>
</head>
<body>

    @include('layouts.navbar')

    <div class="container">
        @yield('contents')
    </div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
</html>
