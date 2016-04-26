var gulp = require('gulp');
//var sass = require('gulp-sass');
var shell = require('gulp-shell');

gulp.task('build', shell.task([ 'jekyll build' ]));
