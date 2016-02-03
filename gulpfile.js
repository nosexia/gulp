'use strict';
var gulp = require('gulp');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');
// 加载vinyl-named-with-path，解析时带路径（坑）
var named = require('vinyl-named-with-path');
var plumber = require('gulp-plumber');


var devConfig = {
	devtool: '#source-map'
};

gulp.task('dev-test', function(){
    return gulp.src('./scripts/**/*Main.js')
    .pipe(named())
    .pipe(plumber())
    .pipe(gulpWebpack(devConfig))
    .pipe(gulp.dest('./scripts-build'));
});




