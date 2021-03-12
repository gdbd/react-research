const path = require("path");
const babelCfg = require("./babel.config.test");

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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          name: "vendor",
          enforce: true,
          priority: -10,
          reuseExistingChunk: true
        }
      }
    }
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
            plugins: babelCfg.pluginsTest
          }
        }
      }
    ]
  }
};

module.exports = client;
