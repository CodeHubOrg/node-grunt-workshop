module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('test', ['browserify:test', 'karma:unit']);
    grunt.registerTask('default', ['jshint', 'test', 'browserify', 'uglify']);
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
          },
          test: {
            src: ['../lib/**/*.js','../test/unit/**/*.js'],
            dest: '../dist-test/client.js'
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
        },

        jshint: {
            files: ['gruntFile.js', '../lib/**/*.js'],
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: false,
                newcap: true,
                noarg: true,
                sub: true,
                boss: true,
                eqnull: true,
                globals: {}
            }
        },

        karma: {
            unit: {
                configFile: '../test/config/unit.js'
            }
        },

        uglify: {
            dist: {
                options: {
                    banner: "<%= banner %>"
                },
                src: '../dist/client.js',
                dest: '../dist/client.min.js'
            }
        }

    });
};