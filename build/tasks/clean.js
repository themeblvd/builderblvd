const gulp = require('gulp');
const del = require('del');

function clean() {
  return del(['../assets/css', '../assets/js', '../*.zip'], { force: true });
}

module.exports = clean;
