const gulp = require('gulp')
const gulp_tsc = require('gulp-typescript')
const merge = require('merge2')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const dart = require("gulp-dart")
const babel = require("gulp-babel")

const sources = ['test.ts','test2.tsx']


gulp.task('compile', function () {

    console.log('def task start');

    let tsc_proj = gulp_tsc.createProject({
        declaration: true,
        noResolve: true,
        target: "ES5",
        module: "commonjs",
        jsx: "react"
    });

   let ts_result = gulp.src(sources).pipe(tsc_proj());
   ts_result.js.pipe(gulp.dest('build'));

    console.log('def task end');
});

gulp.task('browserify', function () {
    const b = browserify({ entries: [
        './build/test2.js',
        './build/test.js',
        './build/test3.js'
    ]})

    b.external(['react','react-dom'])
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest('build'))
});

gulp.task('babel-jsx', function () {
   gulp.src('test3.jsx')
   .pipe(babel({presets: ['env','react']}))
   .pipe(gulp.dest('build'));
});

gulp.task('browserify-clock', function () {
    const b = browserify({ entries: ['./clock/clock.js']})

    b.external(['lodash'])
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest('clock'))
});

gulp.task("dart", function() {
    return gulp
      .src('test-d.dart')
      .pipe(dart({ "dest": "./build" }))
     // .pipe(gulp.dest('./build'))
  });