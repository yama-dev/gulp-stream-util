/*!
 * GULP STREAM UTIL
 * Version 0.3.0
 * Repository https://github.com/yama-dev/gulp-stream-util
 * Copyright yama-dev
 * Licensed under the MIT license.
 */

const path = require('path');
const through = require('through2');
const PluginError = require('plugin-error');

const PLUGIN_NAME = 'gulp-stream-util';

function gulpStreamUril(_attach, options) {
  if (!options) {
    options = {};
  }
  if (!_attach) {
    throw new PluginError(PLUGIN_NAME, 'Missing stream util!');
  }

  function transform(file, encoding, callback) {

    if(file.isBuffer()){
      let _path = file.relative;
      _path = _path.replace(/\\/g, '/');

      let _parse = path.parse(_path);

      let _obj = {
        path: _path,
        root: _parse.root,
        dir : _parse.dir,
        base: _parse.base,
        ext : _parse.ext,
        name: _parse.name,
        _cwd : file.cwd,
        _path: file.path,
        _relative: file.relative,
        _contents: file.contents.toString('utf8')
      };

      let attach = _attach;
      if (typeof _attach === 'function') {
        attach = _attach.bind(_obj);
      }

      attach();

      callback(null, file);
    }
  };

  function flush(callback){
    callback();
  }

  return through.obj(transform, flush);
};

module.exports = gulpStreamUril;
