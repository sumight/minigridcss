var gulp = require('gulp');
var less = require('gulp-less')
var sourcemaps = require('gulp-sourcemaps');
var cleancss = require('gulp-clean-css')
var rename = require('gulp-rename')

gulp.task('build', function() {
  gulp.src('src/minigrid.less')
    .pipe(rename('minigrid.css'))
    .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(cleancss({}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});