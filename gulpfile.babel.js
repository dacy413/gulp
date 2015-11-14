// var gulp = require("gulp");
// // var sass = require("gulp-sass");
// // var autoprefixer = require("gulp-autoprefixer");
// // replace with gulp-load-plugins
// var browserSync = require("browser-sync");
// var $ = require("gulp-load-plugins")();
//
// gulp.task("style", function() {
//   return gulp.src("sass/**/*.scss")
//     .pipe($.sass())
//     .pipe($.autoprefixer())
//     .pipe(gulp.dest("css"));
// });
//
// gulp.task("watch", function() {
//   browserSync.init({
//     server: {
//       baseDir: "./"
//     }
//   });
//   gulp.watch("sass/demo.scss", ["style"])
//     .on("change", browserSync.reload);
// });
//
// gulp.task("hello", function() {
//   console.log("Hello,Dacy...");
// });

// replace for es6
'use strict';

// import gulpPlugin from 'gulp-load-plugins';
import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";


// const plugins = gulpPlugin();

const dirs = {
  src: "scss",
  dest: "css"
};

const sassPath = {
  src: "${dirs.src}/demo.scss",
  dest: "${dirs.dest}"
};

gulp.task("style",()=>{
  return gulp.src(dirs.src)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(dirs.dest));
});
