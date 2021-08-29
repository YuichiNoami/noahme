const mix = require('laravel-mix');
mix.js('resources/js/app.js', 'public/js').vue()
    // 以降はお好みで変更してください
    .sass('resources/sass/app.scss', 'public/css');
// .options({
//     postCss: [
//         require('postcss-import')
//     ]
// })
// .webpackConfig(require('./webpack.config'))
// .sourceMaps();