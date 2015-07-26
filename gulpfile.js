/* */
var gulp = require("gulp");
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

