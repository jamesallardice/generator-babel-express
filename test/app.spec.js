var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('babel-express:app', function () {

  it('creates files', function () {

    var expected = [
      '.editorconfig',
      '.gitignore',
      'package.json',
      'README.md',
    ];

    assert.file(expected);
  });
});
