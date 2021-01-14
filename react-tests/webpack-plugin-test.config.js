const path = require("path");
const babelCfg = require("./babel.config");

const client = {
  mode: "development",
  entry: {
    plugin_test: "./src/plugin-test/file.tsx"
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

module.exports = client;
