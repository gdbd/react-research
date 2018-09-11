const path = require('path')

module.exports ={
    mode: 'development',
    entry: {
        js: './src/test.js', 
        jsx: './src/test.jsx',
        ts: './src/test.ts',
        tsx: './src/test.tsx'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool:"source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules:[{
            test: [/\.js$/, /\.jsx$/],
            exclude: /node_modules/,          
            loader: 'babel-loader',
            query: {
                presets: ['env','react']
            }            
        },{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
        },{
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        },{
            test: /\.css$/,
            loader: "css-loader",
            options:{
                modules: true
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
        "react-dom": "ReactDOM",
        "redux": "Redux",
        "react-redux": "ReactRedux"
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        port: 3600
    }
}