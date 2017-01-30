'use strict';

const S = require('underscore.string');

var opts = {
  "template": {
    "options": [
      {
        "name": "JSX",
        "value": "jsx",
        "suffixExclude": [".rt.html",'.component.js'],
         "packages": []
      },
      {
        "name": "React Templates",
        "value": "rt",
        "suffixExclude":[".jsx"],
        "packages": [
          { "name": "react-templates", "version": ">= 0.4.0" },
          { "name": "react-templates-loader", "version": ">= 0.4.0" },
          { "name":"babel-plugin-react-templates","version":">= 1.1.0"}
        ]
      }
    ],
    "default": "jsx"
  },
  "addons_component": {
    "options": [
      {
        "name": "SASS File",
        "value":"sass",
        "checked": false,
        "suffixExclude": [".scss"],
        "packages": []
      },
      {
        "name": "React Templates File",
        "value":"rt",
        "checked": false,
        "suffixExclude":[".rt.html"],
        "packages": [
          { "name": "react-templates", "version": ">= 0.4.0" },
          { "name": "react-templates-loader", "version": ">= 0.4.0" },
          { "name":"babel-plugin-react-templates","version":">= 1.1.0"}
        ]
      },
      {
        "name": "Test File",
        "value":"test",
        "checked": false,
        "suffixExclude":[".test.js"],
        "packages": []
      }
    ]
  },
  "addons_reducer": {
    "options": [
      {
        "name": "Test File",
        "value":"test",
        "checked": false,
        "suffixExclude":[".test.js"],
        "packages": []
      }
    ]
  }
};

/**
 * Get a setting
 * @param  {String} setting
 * @return {Mixed} setting or null if not found
 */
let getSetting = (setting) => {
  return opts[setting] !== undefined ? opts[setting] : null;
}

/**
 * Get choices for a given setting
 * @param  {String} setting
 * @return {Mixed} Result or null if nothing was found
 */
let getChoices = function getChoices(setting) {

  let config = getSetting(setting);
  return config && Array.isArray(config.options) ? config.options : null;
}

/**
 * Get the wanted choice by key
 * @param  {String} setting
 * @param  {String} key
 * @return {Object}
 */
let getChoiceByKey = (setting, key) => {

  let choices = getChoices(setting);
  if(!choices) {
    return null;
  }

  for(let choice of choices) {

    if(choice.value === key) {
      return choice;
    }
  }

  return null;
}

const templateData = (componentName) =>{
  return {
    componentNameLowerCase: S.camelize(componentName),
    componentNameCamelCase: S.classify(componentName),
    componentNameCamelCaseDecapitalized: S.camelize(componentName),
  };
}

/**
 * Get the default choice for a config setting
 * @param  {String} setting
 * @return {Mixed}
 */
let getDefaultChoice = (setting) => {
  let config = getSetting(setting);
  return config && config.default !== undefined && config.default.length > 0 ? config.default : null;
}

module.exports = {
  getSetting,
  getChoices,
  getChoiceByKey,
  getDefaultChoice,
  templateData
};