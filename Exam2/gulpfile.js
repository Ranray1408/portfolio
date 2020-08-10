let gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin');


gulp.task('compress', function () {
    return gulp.src('#src_build/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img/'));
});


gulp.task('scss', function () {
    return gulp.src('#src_build/scss/**/*scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('build/css'));

});


gulp.task('watch', function () {
    gulp.watch('#src_build/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('#src_build/img/*', gulp.parallel('compress'));
    //gulp.watch('#src_build/js/**/*.js', gulp.parallel('babel'));
});

gulp.task('default', gulp.parallel('watch'));