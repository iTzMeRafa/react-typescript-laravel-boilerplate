# React-TypeScript-Laravel Boilerplate

This is a web-application boilerplate using the PHP-framework [Laravel](https://laravel.com/) serving as the backend.  
[React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/) and [SCSS](https://sass-lang.com/) for the frontend.
[Webpack](https://webpack.js.org/) to bundle all files.

## Usage & Installation

[Composer](https://getcomposer.org/), [NodeJS](https://nodejs.org/en/) and [>=PHP5](https://secure.php.net/) is required to run this project.

* Rename the __.env.example__ file to __.env__ and enter your values

* Clone this repository to your desired location and install dependencies:


```php
composer update --no-scripts  
(composer install)
npm install
php artisan key:generate
php artisan cache:clear
composer dumpautoload
php artisan migrate
```
## Compiling & Building Project
- compiling once: ``` npm run build ```
- compiling and watching changes: ``` npm run dev ```

## Could be useful 
If you are still getting errors, try following:

* Edit your vHost-File
```config
<Directory "/var/www/example.net/public">
    Options Indexes FollowSymLinks Includes ExecCGI
    AllowOverride All
    Require all granted
</Directory>
```

* Grant Permission ```777 ``` to the ```storage/``` folder.   
* Add user group ```www-data ``` to ```/public/img ``` folder:   
```sudo chown -R www-data:www-data /public/img ```


## Contributing
Feel free to open issues. But it is unlikely that I'll accept pull requests since this is a boilerplate like I want it and does not need changes. Thank you!

## License
[MIT](https://choosealicense.com/licenses/mit/)