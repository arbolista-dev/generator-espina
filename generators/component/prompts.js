'use strict';
const config = require('../../utils/config');
const yeoman = require('../../utils/yeoman');

module.exports = [
  {
    type: 'input',
    name: 'componentName',
    message: 'Please choose your component name',
    default: 'component'
  },
  {
    type: 'input',
    name: 'where',
    message: 'Please choose your component folder',
    default: 'shared/components/layouts/{name}'
  },
  {
    type: 'checkbox',
    name: 'addons',
    message: 'Please select your component addons',
    choices: config.getChoices('addons_component'),
    default: config.getDefaultChoice('addons_component')
  }
];