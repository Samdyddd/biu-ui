const fs = require('fs-extra');
const path = require('path');
const babel = require('babel-core');

const compiler = require('vue-sfc-compilier');

const esDir = path.join(__dirname, '../es')
const libDir = path.join(__dirname, '../lib')
const srcDir = path.join(__dirname, '../packages')

const compilerOption = {
  babel: {
    extends: path.join(__dirname, '../.babelrc')
  }
}

const whiteList = /(demo|biu-css|test|\.md)/;

// 创建或清空文件夹lib, es
fs.emptyDirSync(esDir);
fs.emptyDirSync(libDir);

// 将src所有内容复制到es, lib中
fs.copySync(srcDir, esDir)
fs.copySync(srcDir, libDir)


function isDir(dir) {
  // 判断是否是目录
  return fs.lstatSync(dir).isDirectory();
}

function compile(dir, jsOnly = false) {
  // 读取路径
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const absolutePath = path.join(dir, file);

    if(whiteList.test(file)) {
      // 删除目录（包含文件）或文件
      fs.removeSync(absolutePath)
    } else if (isDir(absolutePath)) {
      // 判断是否是文件夹
      return compile(absolutePath)
    } else if (/\.vue$/.test(file) && !jsOnly) {
      // 检测到vue文件，读取路径中文件的数据
      const source = fs.readFileSync(absolutePath, 'utf-8');
      // todo:???
      fs.removeSync(absolutePath);
      // xxx.vue.js
      const outputVuePath = absolutePath + '.js';
      // xxx.js
      const outputJsPath = absolutePath.replace('.vue', '.js')
      const output = fs.existsSync(outputJsPath) ? outputVuePath : outputJsPath;
      // comoiler: vue-sfc-compiler将vue文件编译为js文件，vue单文件组件编译器option：srouce和babel的规则文件参数
      // output必须是文件路径
      fs.outputFileSync(output, compiler(srouce, compilerOption).js);
    } else if (/\.js$/.test(file)) {
      // babel编译js文件
      const { code } = babel.transformFileSync(absolutePath, compilerOption.babel);
      fs.outputFileSync(absolutePath, code);
    }
  });
}




