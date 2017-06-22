const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'axios',
  'babel-preset-stage-1',
  'bcrypt-node',
  'bcrypt-nodejs',
  'body-parser',
  'cors',
  'express',
  'jwt-simple',
  'lodash',
  'mongoose',
  'morgan',
  'passport',
  'passport-jwt',
  'passport-local',
  'react',
  'react-bootstrap',
  'react-dom',
  'react-redux',
  'react-router',
  'react-router-dom',
  'redux',
  'redux-thunk',
]

module.exports = {
  entry: {
    vendor: VENDOR_LIBS,
    bundle: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      test: /\.js$/
    }]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    dns: 'empty'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'bundle', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/templates/index.html'
    })
  ]
};
