const path = require("path");
const babelCfg = require("./babel.config");
const nconf = require("nconf");
nconf.argv().env();

// const target = nconf.get('target');
const modul = nconf.get("module");

const client = {
  target: "web",
  mode: "development",
  entry: {
    app: "./src/app/app.tsx",
    "app-list": "./src/app-list/app.tsx",
    "hook-test": "./src/hook-test/app.tsx",
    appMob: "./src/app-mob/app.tsx",
    appTrunk: "./src/app-trunk/app.tsx",
    appSaga: "./src/app-saga/app.tsx",
    "use-global": "./src/use-global",
    "decorator-test": "./src/decorator-test/index.ts"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      /*{
            test: [/\.js$/, /\.jsx$/],
            exclude: /node_modules/,          
            loader: 'babel-loader',
            query: {
                presets: ['env','react']              
            }            
        },*/
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: false,
            babelrc: false,
            presets: babelCfg.presets,
            plugins: babelCfg.plugins
          }
        }
      }
      /*,{
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        },{
            test: /\.css$/,
            loader: "css-loader",
            options:{
                modules: true
            }
        }*/
    ]
  },
  externals: {
    lodash: {
      commonjs: "lodash",
      amd: "lodash",
      root: "_" // indicates global variable
    },
    react: "React",
    "react-dom": "ReactDOM",
    redux: "Redux",
    "react-redux": "ReactRedux",
    "react-router-dom": "ReactRouterDOM",
    mobx: "mobx"
  }
};

const server = {
  ...client,
  target: "node",
  entry: {
    server: "./src/server/index.tsx"
  },
  externals: {}
};

const mount = {
  ...client,
  entry: {
    mount: "./src/server/mount.tsx"
  },
  externals: {}
};

var config = modul === "web" ? client : modul === "mount" ? mount : server;

module.exports = config;
