const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    iife: false,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      inject: 'body',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, './src/assets'), to: path.resolve(__dirname, './dist/assets') }
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      }
    ]
  }
}

