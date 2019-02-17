
let assert = require('assert');
let fs = require('fs');

let File = require('vinyl');

let gulpStreamUtil = require('../');

describe('instance', function () {
  let _file = new File({
    path: 'test/fixtures/helloworld.txt',
    contents: fs.readFileSync('test/fixtures/helloworld.txt')
  });
  let _check = function (stream) {
    stream.on('data', function(newFile){});
    stream.write(_file);
    stream.end();
  };

  it('instance lib', function() {
    let stream = gulpStreamUtil(function(){});
    _check(stream);
  });
});

describe('check value', function () {
  let _file = new File({
    path: 'test/fixtures/helloworld.txt',
    contents: fs.readFileSync('test/fixtures/helloworld.txt')
  });

  let _check = function (stream, done, cb) {
    stream.on('data', function (newFile) {
      cb(newFile);
      done();
    });

    stream.write(_file);
    stream.end();
  };

  it('path OK.', function(done) {
    let stream = gulpStreamUtil(function(){
      assert.equal(this.path, 'test/fixtures/helloworld.txt');
    });
    _check(stream, done, function(newFile){});
  });

  it('root OK.', function(done) {
    let stream = gulpStreamUtil(function(){
      assert.equal(this.root, '');
    });
    _check(stream, done, function(newFile){});
  });

  it('dir OK.', function(done) {
    let stream = gulpStreamUtil(function(){
      assert.equal(this.dir, 'test/fixtures');
    });
    _check(stream, done, function(newFile){});
  });

  it('base OK.', function(done) {
    let stream = gulpStreamUtil(function(){
      assert.equal(this.base, 'helloworld.txt');
    });
    _check(stream, done, function(newFile){});
  });

  it('ext OK.', function(done) {
    let stream = gulpStreamUtil(function(){
      assert.equal(this.ext, '.txt');
    });
    _check(stream, done, function(newFile){});
  });

  it('name OK.', function(done) {
    let stream = gulpStreamUtil(function(){
      assert.equal(this.name, 'helloworld');
    });
    _check(stream, done, function(newFile){});
  });

});

