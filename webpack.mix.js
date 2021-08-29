const mix = require('laravel-mix');
mix.js('resources/js/app.ts', 'public/js')
    .sass('resources/sass/app.scss', 'public/css').vue();