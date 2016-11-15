var opts = {
  "template": {
    "options": [
      {
        "name": "JSX",
        "value": "jsx",
        "suffixExclude": [".rt.html",'.component.js'],
      },
      {
        "name": "React Templates",
        "value": "rt",
        "suffixExclude":[".jsx"],
        "packages": [
          { "name": "react-templates", "version": ">= 0.4.0" },
          { "name": "react-templates-loader", "version": ">= 0.4.0" }
          { "name":"babel-plugin-react-templates","version":">= 1.1.0"}
        ]
      }
    ],
    "default": "jsx"
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

  let result = null;

  for(let choice of choices) {

    if(choice.name === key) {
      result = choice;
      break;
    }
  }

  return result;
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
  getDefaultChoice
};