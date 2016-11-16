'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
const fs = require('fs');
var prompts = require('./prompts');
const config = require('../../utils/config');


const copyFiles = (scope, basepath, exclusions) => {
  fs.readdir(basepath, (err, items) => {
    if ( err ) {
      return;
    }
    let data =  config.templateData(scope.props.componentName);
    data.template =  scope.props.addons.indexOf("rt") !== -1;
    scope.props.where = scope.props.where.replace("{name}",data.componentNameCamelCaseDecapitalized);
    for ( let item of items ) {
      let exclude = exclusions.find((suffix)=>{
        return item.indexOf(suffix) === item.length - suffix.length && item.indexOf(suffix)  !== -1;
      });
      if( exclude ){
        continue;
      }
      // Copy all items to our root
      let fullPath = scope.templatePath(item);

      if (!fs.lstatSync(fullPath).isDirectory()) {
        if(!data.template && item.indexOf("component.js")) {
          scope.fs.copyTpl(fullPath, scope.destinationPath(scope.props.where+"/"+ item.replace("COMPONENT_NAME",data.componentNameCamelCaseDecapitalized).replace(".js",".jsx")),data);  
        }else {
          scope.fs.copyTpl(fullPath, scope.destinationPath(scope.props.where+"/"+ item.replace("COMPONENT_NAME",data.componentNameCamelCaseDecapitalized)),data);
        }
      }
    }
  });
};



module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('espina component') + ' generator!'
    ));

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  configuring() {

  },

  writing() {
    let exclusions = ['sass','rt','test'];
    let exclude=[];
    this.props.addons.forEach((a) => {
      var index = exclusions.indexOf(a);
      if (index > -1) {
        exclusions.splice(index, 1);
      }
    });
    exclusions.forEach((a)=>{
      exclude = exclude.concat(config.getChoiceByKey('addons_component', a).suffixExclude);
    });
    copyFiles(this,this.sourceRoot(), exclude);
  },

  install: function () {
    //this.installDependencies();
  }
});
