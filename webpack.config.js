var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './app/main'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.resolve(ROOT_PATH, 'app')
    }]
  }
};

// var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var webpack = require('webpack');
// var merge = require('webpack-merge');
//
// var TARGET = process.env.TARGET;
// var ROOT_PATH = path.resolve(__dirname);
//
// var commonConfig = {
//   entry: [path.resolve(ROOT_PATH, 'app/main')],
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   output: {
//     path: path.resolve(ROOT_PATH, 'build'),
//     filename: 'bundle.js'
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Unijobs'
//     })
//   ]
// };
//
// if (TARGET === 'build') {
//   module.exports = merge(commonConfig, {
//     devtool: 'source-map',
//     module: {
//       loaders: [
//         {
//           test: /\.jsx?$/,
//           loader: 'babel?stage=1',
//           include: path.resolve(ROOT_PATH, 'app')
//         }
//       ]
//     },
//     plugins: [
//       new webpack.DefinePlugin({
//         'process.env': {
//           'NODE_ENV': JSON.stringify('production')
//         }
//       }),
//       new webpack.optimize.UglifyJsPlugin({
//         compress: {
//           warnings: false
//         }
//       })
//     ]
//   });
// };
//
// if (TARGET === 'dev') {
//   module.exports = merge(commonConfig, {
//     devtool: 'eval',
//     entry: [
//       'webpack-hot-middleware/client'
//     ],
//     plugins: [
//       new webpack.HotModuleReplacementPlugin()
//     ],
//     module: {
//       loaders: [{
//         test: /\.jsx?$/,
//         loaders: ['babel'],
//         include: path.join(ROOT_PATH, 'app')
//       }]
//     }
//   })
// };
