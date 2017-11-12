var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var clean = require('gulp-clean');

// browserify()

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

gulp.task('browserify', function() {
    return browserify('src/js/main.js')
        .bundle()
        .pipe(source('game.js'))
        .pipe(gulp.dest('public/js'), {overwrite: true})
        .pipe(gulp.dest('dist', {overwrite: true}));
})

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
    gulp.watch("src/js/**/*.js", ['browserify']);
    gulp.watch("public/css/**/*.css", ["reload-css"]);
    gulp.watch("public/**/*.html").on('change', browserSync.reload);
    gulp.watch("public/js/game.js").on('change', browserSync.reload);
});