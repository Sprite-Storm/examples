const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const clean = require('gulp-clean');

/**
 * TO DO
 * Replace update public with new / deleted files in static
 */

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./public",
        },
        open: true
    });
});

gulp.task('reload-css', function () {
    gulp.src('public/css/*')
        .pipe(browserSync.stream());
});

gulp.task('compile-js', function() {
    gulp.src('src/js/main.js')
        .pipe(browserify({
          insertGlobals : true
        }))
        .pipe(rename('game.js'))
        .pipe(gulp.dest('./public/js/', {overwrite: true}))
});

gulp.task('cleanup', function () {
    gulp.src('public', {read: false})
        .pipe(clean());
});

gulp.task('copy-static', function() {
    gulp.src('static/**/*')
        .pipe(gulp.dest('public'));
});

gulp.task('watch-folder', function() {  
    gulp.src('static/**/*', {base: 'public'})
        .pipe(watch('static', {base: 'static'}))
        .pipe(gulp.dest('public'));
});

gulp.task('watch', ['watch-folder', 'browser-sync'], function () {
    gulp.watch("src/js/**/*.js", ['compile-js']);
    gulp.watch("public/css/**/*.css", ["reload-css"]);
    gulp.watch("public/**/*.html").on('change', browserSync.reload);
    gulp.watch("public/js/game.js").on('change', browserSync.reload);
});