const gulp = require('gulp');
const zip = require('gulp-zip');
const { version } = require('../../package.json');

function packagePlugin() {
  gulp
    .src([
      '../**/*',
      '!../{node_modules,node_modules/**/*}',
      '!../{build,build/**/*}',
      '!../assets/{src,src/**/*}',
      '!../.babelrc',
      '!../.editorconfig',
      '!../.gitignore',
      '!../*.config.js',
      '!../*.json',
      '!../readme.md'
    ])
    .pipe(zip(`builderblvd-${version}.zip`))
    .pipe(gulp.dest('../'));
}

module.exports = packagePlugin;
