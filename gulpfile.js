var webpackStream = require('webpack-stream');
var named = require('vinyl-named');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var webpackConfig = {
	output:{
		filename: '[name].js'
	}
}

gulp.task('dev', function(){
	return gulp.src('./scripts/**/*Main.js',{
		base: './scripts/'
	})
	.pipe(named())
	.pipe( webpackStream(webpackConfig) )
	.pipe(gulp.dest( './scripts-build/' ))
});


