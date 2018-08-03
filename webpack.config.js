const path = require('path');
const webpack = require('webpack');
const addUnminified = require('unminified-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    editor: '../assets/src/js/editor.js' // relative to ./build/gulpfile.js
  },
  output: {
    // Note: The typical "path" is replaced with gulp.dest in
    // task, and so only filename is needed here.
    filename: './js/[name].min.js'
  },
  externals: {
    wp: 'wp'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    /*
     * Always add an unminified version that can be
     * included via PHP when SCRIPT_DEBUG is true.
     */
    new addUnminified()
  ]
};
