var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: [
    './app.js'
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },

      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
        ]
      }
    ]
  }
}
