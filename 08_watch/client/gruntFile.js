module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['browserify']);
    grunt.registerTask('build-watch', ['default:watch']);

    // Print a timestamp (useful for when watching)
    grunt.registerTask('timestamp', function () {
        grunt.log.subhead(Date());
    });

    grunt.initConfig({

        browserify: {
          dist: {
            src: '../lib/**/*.js',
            dest: '../dist/client.js'
          }
        },

        watch: {
            all: {
                files: ['gruntFile.js', '../lib/**/*.js'],
                tasks: ['default', 'timestamp'],
                options: {
                    interrupt: true,
                    spawn: false
                }
            }
        }
    });
};