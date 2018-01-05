const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCss = new ExtractTextPlugin('assets/styles/[hash].css');
const extractSss = new ExtractTextPlugin('assets/styles/[hash]-sugar.css');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin('css/main.css'),
    extractCss,
    extractSss,
  ],
  module: {
    rules: [
      {
        test: /\.sss$/,
        use: extractSss.extract({
        use: ['css-loader?minimize=true', 'postcss-loader?parser=sugarss'],
      }),
      },
      {
        test: /\.css$/,
        use: extractCss.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true,
            },
          },
            { loader: 'postcss-loader' },
          ],
        },
        ),
      },
    ],
  },
});
