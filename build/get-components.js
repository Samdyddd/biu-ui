const fs = require('fs');
const path = require('path');
// 检测在packages文件夹中是否包含exclude文件夹、文件
// 不包含true
model.exports = function() {
  const dirs = fs.readdirSync(path.resolve(__dirname, '../packages'));
  const excludes = ['index.js', 'biu-css', 'mixins', 'utils', '.DS_Store'];
  return dirs.filter(dirName => excludes.indexOf(dirName) === -1)
}