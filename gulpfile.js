/* */
var gulp = require("gulp");
var concatCss = require('gulp-concat-css');
var browserSync = require('browser-sync');

gulp.task('server', function () {
	browserSync({
		port: 9000,
		server: {
			baseDir: 'src/'
		}
	});
});

gulp.task('watch', function () {
	gulp.watch([
		'src/index.html',
		'**/*'
		]).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);

gulp.task('concatCss', function () {
	return gulp.src([
		"src/bower/normalize.css/normalize.css",
		"src/css/main.css",
		"src/css/buttons.css"
		])
		.pipe(concatCss("src/css/bundle.css"))
		.pipe(gulp.dest('./'));
});


