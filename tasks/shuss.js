'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-run');

  grunt.initConfig({
    run: {
      shuss: {
        exec: 'shuss',
        options: {
          wait: true
        }
      }
    }
  })

  grunt.registerTask('shuss', ['run:shuss']);
};
