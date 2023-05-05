let project_folder = 'dist';
let source_folder = 'src';

let path = {
  build: {
    html: project_folder + '/',
    css: project_folder + '/css/',
    img: project_folder + '/img/',
    js: project_folder + '/js/',
    fonts: project_folder + '/fonts/',
    jsLibs: project_folder + '/jsLibs/',
  },
  src: {
    html: [source_folder + '/*.html'],
    css: source_folder + '/scss/style.scss',
    img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
    js: source_folder + '/js/App.js',
    jsLibs: source_folder + '/jsLibs/**/*.js',
    fonts: source_folder + '/fonts/**/*.*',
  },
  watch: {
    html: source_folder + '/**/*.html',
    css: source_folder + '/scss/**/*.scss',
    img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
    js: source_folder + '/js/**/*.js',
  },
  clean: './' + project_folder + '/',
};

const { src, dest } = require('gulp'),
  gulp = require('gulp'),
  browsersync = require('browser-sync').create(),
  fileinclude = require('gulp-file-include'),
  del = require('del'),
  scss = require('gulp-sass')(require('sass')),
  autoprefixed = require('gulp-autoprefixer');

function browserSync() {
  browsersync.init({
    server: {
      baseDir: './' + project_folder + '/',
    },
    port: 3000,
    notify: false,
  });
}

function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function css() {
  return src(path.src.css)
    .pipe(scss())
    .pipe(autoprefixed({ cascade: true }))
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

function jsLibs() {
  return src(path.src.jsLibs).pipe(dest(path.build.jsLibs)).pipe(browsersync.stream());
}

function js() {
  return src(path.src.js).pipe(fileinclude()).pipe(dest(path.build.js)).pipe(browsersync.stream());
}

function images() {
  return src(path.src.img).pipe(dest(path.build.img)).pipe(browsersync.stream());
}


function fonts() {
  return src(path.src.fonts).pipe(dest(path.build.fonts)).pipe(browsersync.stream());
}

function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
}

function clean() {
  return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(css, html, js, images, fonts, jsLibs));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.jsLibs = jsLibs;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
