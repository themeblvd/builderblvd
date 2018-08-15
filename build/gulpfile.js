const gulp = require('gulp');
const buildCss = require('./tasks/build-css');

// Individual Assets

gulp.task('build-editor-css', () => buildCss('editor'));

gulp.task('build-editor-colors-css', () => buildCss('editor-colors'));

gulp.task('build-frontend-css', () => buildCss('frontend'));

gulp.task('build-css', ['build-editor-css', 'build-frontend-css']);

gulp.task('build-js', require('./tasks/build-js'));

// Active Dev

gulp.task('watch', require('./tasks/watch'));

// Full Build

gulp.task('clean', require('./tasks/clean'));

gulp.task('default', ['build-css', 'build-js']);

gulp.task('package-plugin', require('./tasks/package-plugin'));
