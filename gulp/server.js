/**
 * Created by joeny on 8/5/17.
 */
'use strict';

var gulp = require('gulp');
var util = require('util');
var browserSync = require('browser-sync');

var paths = gulp.paths;

gulp.task('serve', ['watch'], function () {
  var browser = 'default';

  var baseDir = [
    paths.tmp + '/serve',
    paths.src
  ];

  var routes = null;
  if(baseDir === paths.src || (util.isArray(baseDir) && baseDir.indexOf(paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: {
      baseDir: baseDir,
      routes: routes
    },
    port: 3000,
    browser: browser
  });
});
