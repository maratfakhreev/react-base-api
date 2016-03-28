var gulp = require('gulp');
var jsonServer = require('gulp-json-srv');

gulp.task('json-server', function() {
  return jsonServer.start({
    data: 'db.json',
    port: process.env.PORT || 8001
  });
});

gulp.task('default', ['json-server']);
