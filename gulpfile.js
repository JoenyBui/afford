var gulp = require('gulp');
var bower = require('gulp-bower');

gulp.paths = {
    src: 'public',
    dist: 'dist'
};

require('require-dir')('./gulp');

var config = {
    bowerDir: './bower_components'
};

gulp.task('bower', function() {
    return bower().pipe(gulp.dest(config.bowerDir))
});

gulp.task('default', ['bower']);