const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3131,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.sss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader?parser=sugarss',
          },
        ],
      },
    ],
  },
});
