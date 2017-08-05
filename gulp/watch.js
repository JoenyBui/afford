/**
 * Created by joeny on 8/5/17.

 gulp-watch
  File watcher that uses super-fast chokida and emits vinyl objects.

 */

var path = require('path');
var gulp = require('gulp');
var paths = gulp.paths;

gulp.task('watch', function () {
  gulp.watch([
    path.join(paths.src, '/*.html'),
    'bower.json'
  ])
});