# GULP STREAM UTIL.

<br>

## Feature

<br>

## Using

### NPM Usage

``` bash
# install npm.
npm install --save-dev @yama-dev/gulp-stream-util
```

``` javascript
// require.
const streamUtil = require('@yama-dev/gulp-stream-util');
```

### Basic Usage

``` javascript
// require.
const streamUtil = require('@yama-dev/gulp-stream-util');
gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(streamUtil(function(){
      console.log(this);
    }))
    .pipe(gulp.dest('build/'));
});
```

<br>

## API

| API  | description |
|:---  |:---         |
| path | 相対パス    |
| root | ルート      |
| dir  | ディレクトリ|
| base | ベース      |
| ext  | 拡張子      |
| name | ファイル名  |

<br>

## Dependencies

none

<br><br><br>

___

**For Developer**

## Contribution

1. Fork it ( https://github.com/yama-dev/gulp-stream-util/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

<br>

## Licence

[MIT](https://github.com/yama-dev/gulp-stream-util/blob/master/LICENSE)

<br>

## Author

[yama-dev](https://github.com/yama-dev)

