module.exports = function(api) {
   // var isTest = api && api.env('test');

    api.cache.never();

    // You can use isTest to determine what presets and plugins to use.
    var babelPlugins = [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-typescript',

        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
         ['babel-plugin-styled-components', { fileName: false }],
        '@babel/plugin-syntax-dynamic-import'
    ];

    var babelPresets = [
        [
            '@babel/preset-env',
            {
                targets: '> 0.5%, last 2 versions, ie 10',
                useBuiltIns: 'usage',
                corejs: '3.4.1'
            }
        ],
        '@babel/preset-react'
    ];
    return {
        presets: babelPresets,
        plugins: babelPlugins
    };
};
