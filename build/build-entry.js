// 配置docs中的文件
const fs = require('fs-extra');
const glob = require('fast-glob');
const path = require('path');
const uppercamelize = require('uppercamelcase');
const Components = require('./get-components')();

const version = process.env.VERSION || require('../package.json').version;

const tips = '// this file is auto gererated by build/build-entry.js';
const root = path.join(__dirname, '../');
const join = dir => path.join(root, dir);

// 只需在packages建立index.js,下列函数会将所有组件写入index.js中
function buildVantEntry() {
  const uninstallComponents = [
    'Lazyload',
    'Waterfall'
  ];

  const importList = Components.map(name => `import ${uppercamelize(name)} from './${name}';`)

  const exportList = Components.map(name => `${uppercamelize(name)}`);

  const intallList = exportList.filter(name => !~uninstallComponents.indexOf(uppercamelize(name)));

  const content = `${this}`

};

// 写入src中的demo-entry.js
function buildDemoEntry() {
  const dir = path.join(__dirname, '../packages');

  const demos = fs.readdirSync(dir)
    .filter(name => fs.existsSync(path.join(dir, `${name}/demo/index.vue`)))
    .map(name => `'${name}': () => wrapper(import('../../packages/${name}/demo), '${name}')`);

  const content = `${tip}
  import {wrapper} from './demo-common';
  export default {
    ${demos.join(',\n  ')}
  };
  `;
  fs.writeFileSync(path.join(dir, '../docs/src/demo-entry.js'), content)
}

// 写入src中的docs-entry.js

function buildDocsEntry() {
  const output = join('docs/src/docs-entry.js');
  const getName = fullPath => fullPath.replace()
}


