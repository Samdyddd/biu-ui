const fs = require('fs-extra');
const glob = require('fast-glob');
const path = require('path');
const uppercamelize = require('uppercamelcase');
const Components = require('./get-components')();
const version = process.env.VERSION || require('../package.json').version;
const tips = '// this file is auto gererated by build/build-entry.js';
const root = path.join(__dirname, '../');
const join = dir => path.join(root, dir);

function buildVantEntry() {
  const uninstallComponents = [
    'Lazyload',
    'Waterfall'
  ]
};




