var gulp = require('gulp'),
    sass = require('gulp-sass');

var http        = require('http'),
    connect     = require('connect'),
    serveStatic = require('serve-static');

var app = connect().use(serveStatic(__dirname));

gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('serve', function () {
  http.createServer(app).listen(8000);
});




