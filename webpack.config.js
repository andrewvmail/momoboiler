const path = require('path');
// var ExtractTextPlugin = require(path.join(cordovaNodeModules, 'extract-text-webpack-plugin'));


module.exports = {
  // webpack folder's entry js - excluded from jekll's build process.
  entry: "./src/entry.js",
  output: {
    path: path.resolve(__dirname, 'www/js/'),
    filename: "index.js"
  },
  resolve: {
    alias: {
      'react': 'nervjs',
      'react-dom': 'nervjs',
      'create-react-class': "nerv-create-class"
    }
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
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?\S*)?$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      }
    ]
  },



};
