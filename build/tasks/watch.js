const gulp = require('gulp');

function watch() {
  // CSS
  gulp.watch('../assets/src/scss/editor.scss', ['build-editor-css']);
  gulp.watch('../assets/src/scss/frontend.scss', ['build-frontend-css']);
  gulp.watch('../assets/src/scss/partials/*.scss', ['build-css']);

  // JavaScript
  gulp.watch('../assets/src/js/**/*.js', ['build-js']);
}

module.exports = watch;
