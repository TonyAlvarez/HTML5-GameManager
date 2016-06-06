var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('bootstrap/bootstrap.less', 'resources/assets/css/bootstrap.css');
    mix.copy('resources/assets/css', 'htdocs/css');
    mix.copy('resources/assets/js', 'htdocs/js');
    mix.copy('resources/assets/fonts', 'htdocs/fonts');
});