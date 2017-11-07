const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app/src/js/app.js'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist', 'js'),
  },
  module: {
    rules: [
      { test: /\.js[x]?$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: path.resolve(__dirname, 'app/src/index.html'),
      filename: path.resolve(__dirname, 'dist/index.html'),
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
}
