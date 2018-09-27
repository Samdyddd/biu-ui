const gulp = require('gulp');

const postcss = require('gulp-postcss');

const cssmin = require('gulp-clean-css');

const fs = require('fs-extra');

// 编译
gulp.task('complie', () => {
  // 确保目录为空，如果目录不为空，则删除目录内容；如果目录不存在则创建目录；目录本身不会被删除
  fs.emptyDirSync('./lib');
  return gulp
    .src('./src/*.css')
    .pipe(postcss())
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

// 将编译好的文件分别复制到lib和es模块中
gulp.task('lib', ['compile'], () => {
  fs.copySync('./lib', '../../lib/biu-css');
  fs.copySync('./lib', '../../es/biu-css');
});

// 全部任务执行
gulp.task('build', ['lib']);