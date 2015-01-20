var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');


gulp.task('browserify', function(){
	gulp.src('scripts/js/main.js')
		.pipe(browserify({transform:'reactify'}))
		.pipe(concat('app.js'))
		.pipe(gulp.dest('portfolio/static/js'))
});

gulp.task('copy', function(){
	gulp.src('scripts/index.html')
	.pipe(gulp.dest('portfolio/static'))
});

gulp.task('default', ['browserify', 'copy']);

gulp.task('watch', function(){
	gulp.watch('scripts/**/*.*', ['default']);
});