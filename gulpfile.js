const {src, dest, whatch, parallel} = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

// Images
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

// JavaScript
function css(done) {
    src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest("build/css"));

    done();
}

function imagenes(done) {
    const opciones = {
        optimizationLevel: 3
    };

    src('src/img/**/*.{png,jpg,jpeg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'))
    done();
}

function versionWebp(done) {
    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{png,jpg,jpeg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
    done();
}

function javaScript(done) {
    src('src/js/**/*.js')
        .pipe(dest('build/js'))
    done();
}

function dev(done) {
    whatch("src/scss/**/*.scss", css)
    whatch("src/js/**/*.js", javaScript)
    done();
}

// Copilar
exports.css = css;
exports.js = javaScript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.dev = parallel(imagenes, versionWebp, javaScript, dev);