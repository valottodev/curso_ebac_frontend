const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { init, write } = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compilaSass() {
    return src('./source/styles/main.scss')
    .pipe(init())
    .pipe(sass({
        style: 'compressed'
    }))
    .pipe(write('./maps'))
    .pipe(dest('./build/styles'));
}

function comprimeJS() {
    return src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(dest('./build/scripts'))
}

function imgMin() {
    return src('./source/images/*')
    .pipe(imagemin())
    .pipe(dest('./build/images'));
}

exports.default = parallel(compilaSass, comprimeJS, imgMin);

exports.watch = ()=>{
    watch('./source/styles/*.scss', { ignoreInitial: false } ,series(compilaSass))
}