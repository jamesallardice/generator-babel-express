var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({

  prompting: function () {

    var done = this.async();
    var prompts = [
      {
        name: 'appName',
        message: 'What\'s the name of the app? This is used in package.json.',
        default: 'example-app',
      },
    ];

    this.log('Welcome to the Express/Babel app generator!');
    this.prompt(prompts, function ( data ) {

      this.appName = _.kebabCase(data.appName);

      done();
    }.bind(this));
  },

  writing: {

    app: function () {

      // Set up project configuration and dotfiles.
      this.copy('_editorconfig', '.editorconfig');
      this.copy('_gitignore', '.gitignore');
      this.template('_package.json', 'package.json');
      this.template('_readme.md', 'README.md');
    }
  }
});
