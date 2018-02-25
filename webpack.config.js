const path = require('path')

module.exports ={
    entry: {js:'./src/test.js', jsx:'./src/test.jsx'},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules:[{
            test: [/\.js$/, /\.jsx$/],
            exclude: /node_modules/,          
            loader: 'babel-loader',
            query: {
                presets: ['env','react']
            }            
        }]
    },
    externals: {
        lodash:{
            commonjs: "lodash",
            amd: "lodash",
            root: "_" // indicates global variable
        },
        "react":"React",
        "react-dom": "ReactDOM"
    }
}