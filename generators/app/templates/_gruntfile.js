module.exports = function ( grunt ) {

  // Automatically load any Node module whose name starts with 'grunt-'.
  require('load-grunt-tasks')(grunt);

  // Configure Grunt tasks.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
      },
      dist: {
        files: {
          'client/dist/main.css': 'client/styles/main.scss',
        },
      },
    },
    autoprefixer: {
      options: {
        browsers: [
          'last 2 versions',
          'ie 9',
        ],
      },
      dist: {
        src: 'client/dist/main.css',
        dest: 'client/dist/main.css',
      },
    },
    watch: {
      sass: {
        files: [
          'client/styles/**/*.scss',
        ],
        tasks: [
          'sass',
        ],
      },
    },
  });

  // Register Grunt tasks.
  grunt.registerTask('default', [
    'sass',
    'autoprefixer',
  ]);
};
