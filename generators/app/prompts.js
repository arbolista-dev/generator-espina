'use strict';
const config = require('../../utils/config');
const yeoman = require('../../utils/yeoman');

module.exports = [
  {
    type: 'input',
    name: 'appName',
    message: 'Please choose your application name',
    default: yeoman.getAppName()
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description of the new application',
    default: "Description"
  },
  {
    type: 'input',
    name: 'authorName',
    message: 'Name and email of the author (ie Example <user@example.com>)',
    default: "Author name here"
  },
  {
    type: 'list',
    name: 'template',
    message: 'Which template language do you want to use?',
    choices: config.getChoices('template'),
    default: config.getDefaultChoice('template')
  }
];