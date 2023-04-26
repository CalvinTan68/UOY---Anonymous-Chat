<p align="center">
  <img width="500" src="./thumbnail.png">
</p>

## About Project

UOY is a web application where you can share anything anonymously for free and it is secure. It is built with :

- HTML
- CSS
- PHP
- Bootstrap
- Laravel
- MySQL

It is hosted on https://uoy.rf.gd

Hosted since September 1st 2022 on InfinityFree Web Hosting

<br>

## Using Project

- Execute this line

```bash
  git clone https://github.com/CalvinTan68/UOY---Anonymous-Chat.git
```

- After that 

```bash
  cd UOY---Anonymous-Chat
```

- Create .env file by using .env.example file, rename it by deleting the ".example" filename

- Configure your database inside the <strong>.env</strong> file. Mainly you only need to change the <strong>DB_NAME</strong> and <strong>DB_PASSWORD</strong>and also run
```php
  php artisan key:generate
```

- Run command 

```bash
  php artisan serve
```
