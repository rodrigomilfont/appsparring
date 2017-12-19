const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = () => {
  console.log('__dirname: ', __dirname);
  console.log("path.resolve('dist'): ", path.resolve(__dirname, 'dist'));
  return {
    context: __dirname,
    // entry: [
    // 'react-hot-loader/patch',
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/only-dev-server',
    // './src/index.js',
    // ],
    entry: { app: './src/index.jsx' },
    output: {
      filename: '[name].bundle.[hash].js',
      path: path.resolve(__dirname, 'dist'),
      // filename: 'bundle.js',
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Output Updated',
        template: 'index.html',
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'source-map',
    // devtool: 'cheap-eval-source-map',
    devServer: {
      hot: true,
      // publicPath: path.resolve('./dist'),
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'], // resolve for import
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
          test: /\.jsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
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

// const path = require('path');
//
// module.exports = {
//   context: __dirname,
//   entry: './src/index.jsx',
//
//   output: {
//     path: path.resolve('dist'),
//     filename: 'bundle.js',
//   },
//
//   module: {
//     rules: [
//       {
//         test: /\.jsx$/,
//         loader: 'babel-loader',
//       },
//     ],
//   },
// };
//
// const path = require('path');
// const webpack = require('webpack');
//
// module.exports = {
//   context: __dirname,
//   entry: [
//     // 'react-hot-loader/patch',
//     // 'webpack-dev-server/client?http://localhost:8080',
//     // 'webpack/hot/only-dev-server',
//     './src/index.jsx',
//   ],
//   devtool: 'cheap-eval-source-map',
//   output: {
//     path: path.join(__dirname, 'public'),
//     filename: 'bundle.js',
//     publicPath: '/public/',
//   },
//   devServer: {
//     // hot: true,
//     publicPath: '/public/',
//     historyApiFallback: false,
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.json'],
//   },
//   stats: {
//     colors: true,
//     reasons: true,
//     chunks: true,
//   },
//   plugins: [
//     // new webpack.HotModuleReplacementPlugin(),
//     // new webpack.NamedModulesPlugin(),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         loader: 'babel-loader',
//       },
//     ],
//   },
// };
//
// const { resolve } = require('path');
//
// module.exports = env => {
//   return {
//     context: resolve('src'),
//     entry: './index.jsx',
//     output: {
//       path: resolve('public'),
//       filename: 'bundle.js',
//       publicPath: '/public/',
//     },
//     devtool: env.prod ? 'source-map' : 'eval', // yargs
//     resolve: {
//       extensions: ['.js', '.jsx', '.json'],
//     },
//     stats: {
//       colors: true,
//       reasons: true,
//       chunks: false,
//     },
//     module: {
//       rules: [
//         {
//           test: /\.jsx?$/,
//           loader: 'babel-loader',
//         },
//       ],
//     },
//   };
// };
