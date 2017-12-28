const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = () => {
  // console.log('__dirname: ', __dirname);
  console.log("path.resolve('dist'): ", path.resolve(__dirname, 'dist'));
  console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);

  return {
    context: __dirname,
    // entry: [
    // 'react-hot-loader/patch',
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/only-dev-server',
    // './src/index.js',
    // ],
    entry: { main: './src/index.jsx' },
    output: {
      filename:
        process.env.NODE_ENV === 'production'
          ? '[name].[hash].bundle.js'
          : 'assets/[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    devServer: {
      hot: true,
      publicPath: '/',
      historyApiFallback: true,
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      // new HtmlWebpackPlugin({
      //   title: 'Output HtmlWebpackPlugin',
      //   template: 'index.html',
      // }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: ['vendor'],
      // }),
    ],
    devtool:
      process.env.NODE_ENV === 'production'
        ? 'source-map'
        : 'cheap-eval-source-map',
    devServer: {
      hot: true,
      publicPath: '/dist/',
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias:
        process.env.NODE_ENV === 'production'
          ? {
              react: 'preact-compat',
              'react-dom': 'preact-compat',
            }
          : {},
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
        },
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            {
              test: /\.jsx$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              options: {
                cacheDirectory: true,
              },
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
              exclude: /node_modules/,
            },
            {
              exclude: [/\.js$/, /\.html$/, /\.json$/],
              loader: require.resolve('file-loader'),
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true,
    },
  };
};
