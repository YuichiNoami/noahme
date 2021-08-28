const mix = require('laravel-mix');

mix.ts("resources/ts/app.ts", "public/js");

mix.webpackConfig({
    resolve: {
        extensions: [".js", ".jsx", ".vue", ".ts", ".tsx"],
        alias: {
            vue$: "vue/dist/vue.esm.js"
        }
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader",
            options: { appendTsSuffixTo: [/\.vue$/] },
            exclude: /node_modules/
        }]
    }
});