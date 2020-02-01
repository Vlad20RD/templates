const gulp 			= require('gulp');
const concat 		= require('gulp-concat');
const autoprefixer 	= require('gulp-autoprefixer');
const cleanCSS 		= require('gulp-clean-css');
const uglify 		= require('gulp-uglify');
const del 			= require('del');
const browserSync 	= require('browser-sync').create();
const sass 			= require('gulp-sass');
const sourcemaps 	= require('gulp-sourcemaps');



const cssFiles = [
    './src/css/reset.css',
    './src/css/fonts_dev.css',
    './src/css/style_dev.css',
    './src/css/media_dev.css'
]
const jsFiles = [
	'./src/js/script_dev.js'
]




function styles(){
	return gulp.src(cssFiles)
	//В какой файл обьеденить
	.pipe(concat('style.css'))
	//Автопрефикс файлов css
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    //Сжатие css файла
   // .pipe(cleanCSS({level:2}))
	//В какую папку все переместится
	.pipe(gulp.dest('./build/css'))
	.pipe(browserSync.stream());
}

function scss(){
	return gulp.src('./src/scss/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./src/css'))
}

function scripts(){
	return gulp.src(jsFiles)
	//В какой файл обьеденить
	.pipe(concat('script.js'))
	//Сжатие js файла
	//.pipe(uglify())
	//В какую папку все переместится
	.pipe(gulp.dest('./build/js'))
	.pipe(browserSync.stream());
}

function clean(){
	return del(['build/*']);
}

function watch(){
	 browserSync.init({
        server: {
            baseDir: "./"
        }
    });
	//Следить за изменениями файлов css и js
	gulp.watch('./src/css/**/*.css', styles)
	gulp.watch('./src/scss/**/*.scss', gulp.series('task_sass'))
	gulp.watch('./src/js/**/*.js', scripts)
	gulp.watch("./*.html").on('change', browserSync.reload);
}



//Вызов функции css
gulp.task('task_styles', styles);
//Вызов функции scss
gulp.task('task_sass', scss);
//Вызов функции js
gulp.task('task_scripts', scripts);
//Очистка папки build
gulp.task('task_del', clean);
//Отслеживание изменений
gulp.task('task_watch', watch);
//Удаление файлов в папке build и запуск styles и scripts
gulp.task('task_build', gulp.series(clean, gulp.parallel(styles, scripts)));
gulp.task('task_dev', gulp.series('task_build', 'task_watch')); 

//npm i
//Для нового проекта


 

