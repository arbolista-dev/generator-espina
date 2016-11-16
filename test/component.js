'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-espina:app:component', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withPrompts({componentName: "component",where:"shared/components/layouts/{name}",addons:["rt","sass","test"]})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
        'shared/components/layouts/component/component.component.js',
   		'shared/components/layouts/component/component.rt.html',
   		'shared/components/layouts/component/component.scss',
   		'shared/components/layouts/component/component.test.js'
      ]);
 	assert.fileContent('shared/components/layouts/component/component.component.js', 'import template');
  });
});

describe('generator-espina:app:component simple', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withPrompts({componentName: "component",where:"shared/components/layouts/{name}",addons:[]})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
        'shared/components/layouts/component/component.component.jsx'
      ]);
 	assert.noFileContent('shared/components/layouts/component/component.component.jsx', 'import template');
  });
});
