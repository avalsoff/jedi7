var syntax        = 'sass'; // Syntax: sass or scss;

const gulp          = require('gulp');
const gutil         = require('gulp-util' );
const sass          = require('gulp-sass');
const browsersync   = require('browser-sync');
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');
const cleancss      = require('gulp-clean-css');
const rename        = require('gulp-rename');
const autoprefixer  = require('gulp-autoprefixer');
const notify        = require("gulp-notify");
// const pug           = require('gulp-pug');


gulp.task('browser-sync', function() {
  browsersync({
    server: {
      baseDir: 'build'
    },
    notify: false,
    // open: false,
    // tunnel: true,
    // tunnel: "projectname", //Demonstration page: http://projectname.localtunnel.me
  })
});

gulp.task('styles', function() {
  return gulp.src('src/'+syntax+'/**/*.'+syntax+'')
  .pipe(sass({ outputStyle: 'nested' }).on("error", notify.onError()))
  .pipe(rename({ suffix: '.min', prefix : '' }))
  .pipe(autoprefixer(['last 15 versions']))
  // .pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
  .pipe(gulp.dest('build/css'))
  .pipe(browsersync.reload( {stream: true} ))
});

gulp.task('js', function() {
  return gulp.src([
    'src/libs/jquery/dist/jquery.min.js',
    'src/libs/mmenu/jquery.mmenu.all.js',
    'src/libs/OwlCarousel2-2.3.3/dist/owl.carousel.min.js',
    'src/libs/jQuery.equalHeights/jquery.equalheights.min.js',
    'src/libs/fotorama/fotorama.js',
    'src/libs/selectize/dist/js/standalone/selectize.min.js',
    'src/js/common.js', // Always at the end
    ])
  .pipe(concat('scripts.min.js'))
  // .pipe(uglify()) // Mifify js (opt.)
  .pipe(gulp.dest('build/js'))
  .pipe(browsersync.reload({ stream: true }))
});

gulp.task('html', function() {
  return gulp.src('src/*.html')
  .pipe(gulp.dest('build'))
  .pipe(browsersync.reload( {stream: true} ))
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('build/fonts'))
  .pipe(browsersync.reload( {stream: true} ))
});

gulp.task('images', function() {
  return gulp.src('src/img/**/*')
  .pipe(gulp.dest('build/img'))
  .pipe(browsersync.reload( {stream: true} ))
});

gulp.task('watch', ['html', 'fonts', 'images', 'styles', 'js', 'browser-sync'], function() {
  gulp.watch('src/'+syntax+'/**/*.'+syntax+'', ['styles']);
  gulp.watch(['libs/**/*.js', 'src/js/common.js'], ['js']);
  // gulp.watch('src/pug/**/*.pug', ['html']);
  gulp.watch('src/*.html', ['html']);
});

gulp.task('default', ['watch'])