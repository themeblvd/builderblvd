const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserslist = require('../browserslist');
const minifycss = require('gulp-clean-css');
const rename = require('gulp-rename');
const tildeImporter = require('node-sass-tilde-importer');

function buildCss(context) {
  return gulp
    .src(`../assets/src/scss/${context}.scss`)
    .pipe(sass({ outputStyle: 'expanded', importer: tildeImporter }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: browserslist }))
    .pipe(gulp.dest('../assets/css'))
    .pipe(minifycss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('../assets/css'));
}

module.exports = buildCss;
