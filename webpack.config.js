'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.tsx'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[chunkhash].js.map',
    chunkFilename: '[id].chunk.js'
  },

  devtool: 'source-map',
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.webpack.js', '.web.js', '.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets'
      }
    ])
  ],

  devServer: {
    historyApiFallback: { index: '/' },
    stats: "minimal"
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  }
};
