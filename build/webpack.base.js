const webpack = require("webpack");
const path = require("path");
// const { VueLoaderPlugin } = require('vue-loader')

const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: "none",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'style-loader!css-loader!sass-loader'
          }
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "file-loader",
        options: {
          esModule: false,
          name: "img/[name].[contenthash:7].[ext]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('static', 'fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: path.posix.join('static', 'media/[name].[hash:7].[ext]')
        }
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    // new CleanWebpackPlugin()

    
  ],
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      "@": path.join(__dirname, "..", "src"),
    },
  },
};
