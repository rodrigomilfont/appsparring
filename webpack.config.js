const path = require('path');
const webpack = require('webpack');

module.exports = () => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve('dist'),
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    // devServer: {
    //   publicPath: './dist',
    // },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
        },
      ],
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
