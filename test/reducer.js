'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-espina:app:reducer', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/reducer'))
      .withPrompts({componentName: "reducer",where:"shared/reducers/{name}",addons:["test"]})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'shared/reducers/reducer/reducer.actions.js',
      'shared/reducers/reducer/reducer.reducer.js',
      'shared/reducers/reducer/reducer.test.js'
      ]);
  });
});


describe('generator-espina:app:reducer simple', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/reducer'))
      .withPrompts({componentName: "reducer",where:"shared/reducers/{name}",addons:[]})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'shared/reducers/reducer/reducer.actions.js',
      'shared/reducers/reducer/reducer.reducer.js',
      ]);
    assert.noFile('shared/reducers/reducer/reducer.test.js');
  });
});

