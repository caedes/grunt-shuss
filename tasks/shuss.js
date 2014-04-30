/*
 * grunt-shuss
 * https://github.com/caedes/grunt-shuss
 *
 * Copyright (c) 2014 caedes
 * Licensed under the MIT license.
 */

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
