const gulp = require('gulp')
const path = require('path')
const webpack = require('webpack-stream')
const webpackConfig = require('./webpack.config.js')


gulp.task('default', () => {
    return gulp.src('src/test.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('dist/'))
})

gulp.task('test', () => {

})