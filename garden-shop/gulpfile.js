const { src, dest, watch, parallel, series } = require('gulp');


// concatenate style files
const groupCssMediaQueries = require('gulp-group-css-media-queries');
const autoprefixer = require('gulp-autoprefixer');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

function styleConcat() {
	return src([
		'dev/style/scss/*.scss',
		'dev/components/**/*.scss',
	])
		.pipe(autoprefixer({ overrideBrowserlist: ['last 10 version'] }))
		.pipe(concat('style-result.css'))
		.pipe(scss())
		.pipe(groupCssMediaQueries())
		.pipe(dest('release/css'))
		.pipe(browserSync.stream())
}
exports.styleConcat = styleConcat;


//convert scss to css in same folder
function scss2cssComponent() {
	return src('dev/components/**/*.scss')
		.pipe(scss())
		.pipe(dest('release/components/'))
		.pipe(browserSync.stream())
}
exports.scss2cssComponent = scss2cssComponent;
function scss2cssMain() {
	return src('dev/style/scss/*.scss')
		.pipe(scss())
		.pipe(dest('release/css'))
		.pipe(browserSync.stream())
}
exports.scss2cssMain = scss2cssMain;


// copy css styles
function cssCopy() {
	return src('dev/style/**/*.css')
		.pipe(dest('release/'))
		.pipe(browserSync.stream())
}
exports.cssCopy = cssCopy;


// concatenate script files
const uglify = require('gulp-uglify-es').default;
function scriptsConcat() {
	return src([
		'dev/js/*.js'
	])
		.pipe(concat('main-result.js'))
		.pipe(uglify())
		.pipe(dest('release/js'))
		.pipe(browserSync.stream())
}
exports.scriptsConcat = scriptsConcat;


// copy script files
function scriptsCopy() {
	return src('dev/js/*.js')
		.pipe(dest('release/js'))
		.pipe(browserSync.stream())
}
exports.scriptsCopy = scriptsCopy;


// live server
const browserSync = require('browser-sync').create();
function browserSyncFunction() {
	browserSync.init({
		server: {
			baseDir: 'release/'
		},
	})
}
exports.browserSyncFunction = browserSyncFunction;


// file change watcher
function watching() {
	watch(['dev/**/*.scss'], styleConcat)
	watch(['dev/style/**/*.scss'], scss2cssMain)
	watch(['dev/components/**/*.scss'], scss2cssComponent)
	watch(['dev/style/**/*.css'], cssCopy)
	watch(['dev/js/main.js'], scriptsConcat)
	watch(['dev/**/*.html'], fileincluding)
	watch(['dev/**/*.html']).on('change', browserSync.reload)
}
exports.watching = watching;


// remove build folder
const clean = require('gulp-clean');
function cleanRelease() {
	return src('./release')
		.pipe(clean())
}

// create build folder
function building() {
	return src([
		'dev/**/*.html',
	], { base: 'dev' })
		.pipe(dest('./release'))
}

// html composer
const fileinclude = require('gulp-file-include')
function fileincluding() {
	return src(['dev/*.html'])
		.pipe(fileinclude())
		.pipe(dest('release/'));
}
exports.fileincluding = fileincluding;


// copy fonts and convert to ttf
const fs = require('fs');
const fonter = require('gulp-fonter');
const outToTtf = () => {
	// Ищем файлы шрифтов .otf, .eot
	return src(`dev/fonts/*.{eot,otf}`)
		// Конвертируем в .ttf
		.pipe(fonter({
			formats: ['ttf']
		}))
		// Выгружаем в исходную папку
		.pipe(dest(`release/fonts`))
		// Ищем файлы шрифтов .ttf
		.pipe(src(['dev/fonts/*',], { base: 'dev' }))
		// Выгружаем в исходную папку
		.pipe(dest(`./release`))
}
exports.outToTtf = outToTtf;


// font convert to style
const fontsStyle = () => {
	let fontsFile = `dev/style/scss/fonts.scss`;
	// Проверяем существует ли файлы шрифтов
	fs.readdir('dev/fonts/', function (err, fontsFiles) {
		if (fontsFiles) {
			// Проверяем существует ли файл стилей для подключения шрифтов
			if (!fs.existsSync(fontsFile)) {
				// Если файла нет, создаём его
				fs.writeFile(fontsFile, '', cb);
				let newFileOnly;
				for (var i = 0; i < fontsFiles.length; i++) {
					// Записываем подключения шрифтов в файл стилей
					let fontFileName = fontsFiles[i].split('.')[0];
					if (newFileOnly !== fontFileName) {
						let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
						let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
						if (fontWeight.toLowerCase() === 'thin') {
							fontWeight = 100;
						} else if (fontWeight.toLowerCase() === 'extralight') {
							fontWeight = 200;
						} else if (fontWeight.toLowerCase() === 'light') {
							fontWeight = 300;
						} else if (fontWeight.toLowerCase() === 'medium') {
							fontWeight = 500;
						} else if (fontWeight.toLowerCase() === 'semibold') {
							fontWeight = 600;
						} else if (fontWeight.toLowerCase() === 'bold') {
							fontWeight = 700;
						} else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
							fontWeight = 800;
						} else if (fontWeight.toLowerCase() === 'black') {
							fontWeight = 900;
						} else {
							fontWeight = 400;
						}
						fs.appendFile(fontsFile, `@font-face {\n\tfont-family: ${fontName};\n\tsrc: url(../fonts/${fontFileName}.ttf);\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
						newFileOnly = fontFileName;
					}
				}
			} else {
				console.log("Файл scss/fonts.scss уже существует. Для обновления файла нужно его удалить")
			}
		}
	});
	return src(`dev/fonts`);
	function cb() { }
}
exports.fontsStyle = fontsStyle;


// image compress
const imagemin = require('gulp-imagemin');
function imageCompress() {
	return src('dev/images/**/*.png')
		.pipe(imagemin([imagemin.optipng({ optimizationLevel: 7 })]))
		.pipe(dest('release/images'))
}
exports.imageCompress = imageCompress;


// copy image 
function imageCopy() {
	return src([
		'dev/images/**/*',
	])
		.pipe(dest('release/images'))
		.pipe(browserSync.stream())
}
exports.imageCopy = imageCopy;


exports.default = series(cleanRelease, building, series(outToTtf, fontsStyle), parallel(imageCopy, styleConcat, scss2cssMain, scss2cssComponent, cssCopy, scriptsConcat, scriptsCopy, fileincluding), parallel(browserSyncFunction, watching));