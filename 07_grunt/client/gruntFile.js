module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['browserify']);

    grunt.initConfig({

        browserify: {
          dist: {
            src: '../lib/**/*.js',
            dest: '../dist/client.js'
          }
        }

    });
};