import merge from 'webpack-merge';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import common from './webpack.common.babel';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin(),
    new ExtractTextPlugin('css/main.css'),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
        }),
      },
    ],
  },
});
