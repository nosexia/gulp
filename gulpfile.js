'use strict';
var gulp = require('gulp');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');
// 加载vinyl-named-with-path，解析成带路径的（坑）
var named = require('vinyl-named-with-path');
var plumber = require('gulp-plumber');


var devConfig = {};

gulp.task('dev-test', function(){
    return gulp.src('./scripts/**/*Main.js')
    .pipe(named())
    .pipe(plumber())
    .pipe(gulpWebpack(devConfig))
    .pipe(gulp.dest('./scripts-build'));
});




