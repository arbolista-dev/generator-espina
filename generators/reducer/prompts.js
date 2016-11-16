'use strict';
const config = require('../../utils/config');
const yeoman = require('../../utils/yeoman');

module.exports = [
  {
    type: 'input',
    name: 'componentName',
    message: 'Please choose your reducer name',
    default: 'reducer'
  },
  {
    type: 'input',
    name: 'where',
    message: 'Please choose your reducer folder',
    default: 'shared/reducers/{name}'
  },
  {
    type: 'checkbox',
    name: 'addons',
    message: 'Please select your reducer addons',
    choices: config.getChoices('addons_reducer'),
    default: config.getDefaultChoice('addons_reducer')
  }
];