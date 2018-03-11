const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: path.resolve(__dirname, 'www/js/'),
    filename: "index.js"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'src/index.html', to: '../'},
      {from: 'src/css', to: '../css/'},
      {from: 'src/img', to: '../img/'},
      {from: 'node_modules/onsenui/css', to: '../css/'},
    ])
  ]
};
