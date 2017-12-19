const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/main.js',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      // title: 'Production',
      template: './html/index.html',
      hash: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?name=assets/img/[name].[ext]',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader?name=assets/fonts/[name].[ext]',
        ],
      },
    ],
  },
};
