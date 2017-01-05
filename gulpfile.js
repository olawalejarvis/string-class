'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

/**
 * Setup browserSync to our server directory,
 *  which our directory in this case is "src"
 */
gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
      port: process.env.PORT || 5000,
      open: false,
      ghostMode: false,
      ui: false
  });
});

/**
 * Add watch function to be able to reload our browser
 *  whenever changes are been made to js, html, and css files
 */
gulp.task('watch', ['browserSync'], function (){
  gulp.watch(['src/css/**/*.css','src/*.html','src/js/**/*.js'],browserSync.reload);

});

gulp.task('default', ['watch']);
