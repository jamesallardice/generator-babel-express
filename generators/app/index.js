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
      {
        name: 'appPort',
        message: 'What port should the server run on?',
        default: Math.floor(Math.random() * 8000) + 2000,
      },
    ];

    this.log('Welcome to the Express/Babel app generator!');
    this.prompt(prompts, function ( data ) {

      this.appName = _.kebabCase(data.appName);
      this.appPort = data.appPort;

      done();
    }.bind(this));
  },

  writing: {

    app: function () {

      // Set up project configuration and dotfiles.
      this.copy('_editorconfig', '.editorconfig');
      this.copy('_gitignore', '.gitignore');
      this.copy('_entry.json', 'entry.json');
      this.copy('_gruntfile.js', 'gruntfile.js');
      this.template('_package.json', 'package.json');
      this.template('_bower.json', 'bower.json');
      this.template('_bowerrc', '.bowerrc');
      this.template('_readme.md', 'README.md');
      this.template('_env.example', '.env.example');
      this.template('_env.example', '.env');

      // Set up the app server.
      this.copy('server/server.es6');
      this.copy('server/routes/home.es6');
      this.template('server/views/home.html');

      // Set up the client.
      this.directory('client/');
    },
  },
});
