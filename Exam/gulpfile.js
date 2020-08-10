let gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');



gulp.task('scss', function () {
    return gulp.src('#src_build/scss/**/*scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('build/css'));

});


gulp.task('watch',function () {
     gulp.watch('#src_build/scss/**/*.scss',gulp.parallel('scss'));
});

gulp.task('default', gulp.parallel('watch'));