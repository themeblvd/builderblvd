const gulp = require('gulp');
const path = require('path');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../../webpack.config');

function buildJs() {
  const entry = [
    path.resolve(__dirname, '../../assets/') + '/src/js/editor.js'
    // path.resolve(__dirname, '../../src') + '/assets/src/js/frontend.js' @TODO
  ];

  return gulp
    .src(entry) // For Gulp reference only, actual entry file pulled from Webpack config.
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('../assets')); // Replaces path in typical Webpack output object.
}

module.exports = buildJs;
