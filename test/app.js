'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-espina:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({appName: "Test",description:"Description",authorName:"Author",template:"jsx"})
      .toPromise();
  });

  it('creates files', function () {
    
  });
});
