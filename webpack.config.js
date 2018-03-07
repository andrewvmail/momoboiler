const path = require('path');
// var ExtractTextPlugin = require(path.join(cordovaNodeModules, 'extract-text-webpack-plugin'));


module.exports = {
  // webpack folder's entry js - excluded from jekll's build process.
  entry: "./src/entry.jsx",
  output: {
    path: path.resolve(__dirname, 'www/js/'),
    filename: "index.js"
  },
  // resolve: {
  //   alias: {
  //     'react': 'inferno-compat',
  //     'react-dom': 'inferno-compat'
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          // plugins: [["inferno", {
          //   "imports": true
          // }]]
        }
      },
      // {
      //   test: /\.css$/,
      //   include: [
      //     path.join(__dirname, 'node_modules', 'onsenui', 'css-components-src', 'src'),
      //     path.join(__dirname, 'src')
      //   ],
      //   loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1&-raw!postcss')
      // }, {
      //   test: /\.css$/,
      //   exclude: [
      //     path.join(__dirname, 'node_modules', 'onsenui', 'css-components-src', 'src'),
      //     path.join(__dirname, 'src')
      //   ],
      //   loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      // }
      // {
      //   test: /\.svg$/,
      //   loader: 'file',
      //   query: {
      //     name: 'static/media/[name].[hash:8].[ext]'
      //   }
      // },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?\S*)?$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      }
    ]
  },



};
