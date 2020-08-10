let gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin');
    //browserify   = require('browserify');


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

// function js_compile(){
//     return gulp.src('js/main.js')
//         .pipe(browserify({
//             transform: ['babelify'],
//         }));
//
//
//     let b = browserify({
//         entries: 'js/token_test.js',
//         debug: true
//     }).transform("babelify", {
//         presets: ["@babel/env"],
//         plugins: [
//             ["@babel/plugin-transform-runtime",
//                 {
//                     "regenerator": true
//                 }
//             ]
//         ],
//     });
//
//     return b.bundle()
//         .pipe(source('token_test.js'))
//         .pipe(buffer())
//         .pipe(sourcemaps.init({ loadMaps: true }))
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest(paths.scripts.dest))
//         .on('error', gutil.log);
//
// }


gulp.task('watch', function () {
    gulp.watch('#src_build/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('#src_build/img/*', gulp.parallel('compress'));
    //gulp.watch('#src_build/js/**/*.js', gulp.parallel(js_compile()));
});

gulp.task('default', gulp.parallel('watch'));