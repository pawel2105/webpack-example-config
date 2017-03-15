const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$|\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader',
          publicPath: 'dist'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack starter project',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/index.ejs'
    }),
    new ExtractTextPlugin({
      filename: "app.css",
      disable: false,
      allChunks: true
    })
  ]
}