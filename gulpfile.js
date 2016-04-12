var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");

gulp.task("js", function() {
	return browserify("./src/js/app")
		.bundle(  )
		.pipe( source("bundle.js") )
		.pipe(gulp.dest("./build/"));
});