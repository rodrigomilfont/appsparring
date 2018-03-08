const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  devtool: 'source-map',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new UglifyJSPlugin({ sourceMap: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  optimization: {
    // minimize: true,
    // concatenateModules: false,
    // noEmitOnErrors: true,
    // namedModules: true,
    // namedChunks: true,
    // runtimeChunk: false,
    // splitChunks: {
    //   chunks: 'all',
    //   name: true,
    //   cacheGroups: {
    //     commons: {
    //       name: 'commons',
    //       minChunks: 2,
    //     },
    //   },
    // },
  },
});
