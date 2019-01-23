const path = require('path')
const nodeExternals = require('webpack-node-externals')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash');

const autoprefixer = require('autoprefixer')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/index.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true,
    host: 'localhost',
    port: 3000
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss/,
        use:  [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    autoprefixer
  ]
}
