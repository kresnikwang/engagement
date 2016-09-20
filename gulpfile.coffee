######################################################
#
# gulpfile.coffee
#
# This file is actually not necessary right now.
# - `gulp build` just runs 'webpack'
# - `gulp dev` just runs 'webpack-dev-server'
#
######################################################

gulp = require 'gulp'
gutil = require 'gulp-util'
copy = require 'gulp-copy'
cachebust = require 'gulp-cache-bust'
clean = require 'gulp-clean'

gulp.task 'clean-scripts', ->
  gulp.src('dist', read: false)
    .pipe clean()

# gulp.task 'build', (cb)->

  # TODO: Add task to clean dist folder


gulp.task 'scripts', [ 'clean-scripts' ], ->
  gulp.src('./*.html')
    .pipe(cachebust({
      type: 'timestamp'
    }))
    .pipe gulp.dest('dist')

  gulp.src('./keywords.txt')
  .pipe gulp.dest('dist')

  gulp.src('./fonts/**/*')
  .pipe(gulp.dest('./dist/fonts'))

  gulp.src('./img/**/*')
    .pipe(gulp.dest('./dist/img'))

  gulp.src('./css/**/*')
    .pipe(gulp.dest('./dist/css'))

  gulp.src('./js/**/*')
    .pipe(gulp.dest('./dist/js'))

  gulp.src('./category/**/*')
    .pipe(gulp.dest('./dist/category'))

gulp.task 'build', [ 'scripts' ]