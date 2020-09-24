var nconf = require('nconf');
var path = require('path');
var webpack = require('webpack');
//var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
//var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

var babelCfg = require('./babel.config');

nconf.argv().env();

var customer = nconf.get('customer');
var isProduction = !nconf.get('watch');
var skipChecks = nconf.get('nochecks');
var sourceMap = nconf.get('sourcemap') || 'cheap-module-eval-source-map';


var babelPlugins = babelCfg.plugins;

var hmr = nconf.get('hmr') && !nconf.get('cold');

var publicPath = nconf.get('path') || '/assets/';

if (isProduction) {
} else {
    if (hmr) {
        babelPlugins.push('react-hot-loader/babel');
    }
}


var fileLoader = {
    loader: 'file-loader',
    options: {
        emitFile: true,
        name: isProduction ? '[path][name].[ext]?[hash]' : '[path][name].[ext]'
    }
};

var codeLoaders = [
    {
        loader: 'babel-loader',
        options: {
            cacheDirectory: !isProduction,
            babelrc: false,
            presets: babelCfg.presets,
            plugins: babelPlugins
        }
    },
    {
        loader: 'code-customization-loader',
        options: { customer: customer }
    }
];

if (hmr) {
    codeLoaders.unshift('react-hot-loader/webpack');
}

var rules = [
    {
        test: /jquery\-ui\-touch\-punch\.js$/,
        use: ['imports-loader?realJQueryUi']
    },
    {
        test: /\.html?$/,
        use: ['raw-loader']
    },
    {
        test: /\.tsx?$/,
        use: codeLoaders
    },
    {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'resolve-url-loader', 'less-loader']
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },
    {
        test: /\.(png|jpg|gif|woff|ttf|eot|swf)$/,
        use: fileLoader
    }
];

if (isProduction && !skipChecks) {
    rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {}
    });
}

var alias = {
    admin: path.resolve(__dirname, 'src/admin'),
    less: path.resolve('src/less'),
    css: path.resolve('src/css'),
    config: path.resolve(__dirname, 'src/config'),
    defaultSetting: path.resolve(__dirname, 'src/admin/persistent-settings/defaults'),
    assets: path.resolve(__dirname, 'src/assets'),
    style: path.resolve(__dirname, 'src/css'),
    images: path.resolve(__dirname, 'src/images'),
    template: path.resolve(__dirname, 'src/template'),
    'portal-vn-b2c': path.resolve(__dirname, 'src/portal-vn-b2c'),

    backbone: 'contrib/backbone/backbone-1.1.0',
    bootstrap: 'contrib/bootstrap-3.2.0/js/bootstrap',
    'forms-builder': 'contrib/forms-builder/jquery.forms-builder',
    subtype: 'contrib/subtype',
    jQueryUI: 'contrib/jquery/jquery-ui-touch-punch',
    realJQueryUi: 'contrib/jquery/jquery-ui-1.9.2.custom',
    hint: 'contrib/jquery/jquery.hint',

    knockout: 'contrib/knockout/knockout-3.4.1.debug',
    'knockout.punches': 'contrib/knockout/knockout.punches',
    'knockout.iscroll': 'contrib/knockout/knockout.iscroll',
    'knockout.pagination': 'contrib/knockout/knockout.pagination',
    'knockout.texthighlight': 'contrib/knockout/knockout.texthighlight',
    'knockout.mapping': 'contrib/knockout/knockout.mapping-2.4.1',
    'knockout.backbone': 'contrib/knockout/knockout.backbone',

    proj4: 'contrib/leaflet/proj4-compressed',

    'L.Bing': 'contrib/leaflet/L.Bing',
    'L.Google': 'contrib/leaflet/L.Google',
    'L.Yandex': 'contrib/leaflet/L.Yandex',

    /** Browser capabilities */
    modernizr: 'contrib/modernizr.custom.01549',
    'modernizr.browser': 'contrib/modernizr.plugin.browser',
    'modernizr.flash': 'contrib/modernizr.plugin.flash',
    'modernizr.mobile': 'contrib/modernizr.plugin.mobile',

    iscroll: 'contrib/iscroll/iscroll.adapter',
    'jquery.ui-checkbox': 'contrib/jquery/jquery.ui-checkbox',
    'jquery.ui-slider': 'contrib/jquery/jquery.ui-slider',
    'jquery.ui-popup': 'contrib/jquery/jquery.ui-popup',
    'cctv-list-view': 'contrib/jquery/jquery.cctv-listview',
    jQueryHovering: 'contrib/jquery/jquery.hovering',
    'jquery.checkbox': 'contrib/jquery/jquery.checkbox',
    'jquery.jqcron': 'contrib/jquery/jquery.jqcron',
    swfobject: 'contrib/swfobject/swfobject',
    videojs: 'contrib/video-js/video.dev',
    doT: 'contrib/dot-wrapper',
    handlebars: 'contrib/handlebars/handlebars-1.3.0',
    i18n: 'contrib/i18next.amd.withJQuery-1.7.4',
    d3: 'contrib/d3/d3.min',
    c3: 'contrib/d3/c3',
    BOOMR: 'contrib/boomerang',
    bw: 'contrib/bw',
    'gl-matrix': 'contrib/gl-matrix.min',
    underscore: 'lodash'
};

var plugins = [
    new webpack.ProvidePlugin({
        _: 'lodash',
        $: 'jquery',
        jQuery: 'jquery'
    })
];

if (!skipChecks) {
    plugins.push(
        new ForkTsCheckerWebpackPlugin({
            tslint: true,
            reportFiles: ['src/**/*.{ts,tsx}'],
            async: !isProduction,
            useTypescriptIncrementalApi: true,
            measureCompilationTime: true,
            memoryLimit: 4096,
            workers: ForkTsCheckerWebpackPlugin.ONE_CPU
        })
    );
}

if (!isProduction) {
    if (hmr) {
        alias = {
            ...alias,
            'react-dom': '@hot-loader/react-dom'
        };
    }
    // plugins.push(new HardSourceWebpackPlugin());
}

var out = {
    mode: isProduction ? 'production' : 'development',
    devtool: sourceMap,
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 3,
            maxAsyncRequests: 5,
            maxInitialRequests: 1,
            automaticNameDelimiter: '_',
            name: !isProduction,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true
                },
                ui: {
                    test: /components[\\/]react[\\/]ui/,
                    priority: -15,
                    reuseExistingChunk: true
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    entry: {
        app: './src/app/app.tsx',
        'app-list' : './src/app-list/app.tsx',
        'hook-test' : './src/hook-test/app.tsx',
        // appMob: './src/app-mob/app.tsx',
        appTrunk: './src/app-trunk/app.tsx',
        appSaga: './src/app-saga/app.tsx'
    },
    output: {
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: publicPath,
        chunkFilename: isProduction ? '[name].[hash].chunk.js' : '[name].chunk.js'
    },
    module: {
        rules: rules
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: alias,
        modules: ['src/js', 'node_modules']
    },
    plugins: plugins
};

if (!isProduction && hmr) {
    out.entry.loader = [
        'webpack-hot-middleware/client?path=' + publicPath + '__hmr',
        out.entry.loader
    ];
    plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = out;
