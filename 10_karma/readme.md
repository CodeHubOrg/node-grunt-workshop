Lesson 10 - Unit testing
========================

Lets add karma
--------------

1. In gruntfile.js, load the karma module

        grunt.loadNpmTasks('grunt-karma');

2. Add a test target to the browserify configuration

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

3. Create a new test only task

        grunt.registerTask('test', ['browserify:test', 'karma:unit']);
        grunt.registerTask('default', ['jshint', 'test', 'browserify']);

4. Add configuration to init config

        karma: {
            unit: {
                configFile: '../test/config/unit.js'
            }
        }


Lets add some jasmine unit tests for our function
-------------------------------------------------

5. Add unit tests to test/unit/myModule.spec.js

        describe('test myModule', function () {

            describe('with codehub argument', function () {

                it('should return hello codehub!', function () {

                    var myModule = require('../../lib/myModule.js');

                    expect(myModule.myFunc("codehub")).toEqual("Hello codehub!");

                });
            });

            describe('with no argument', function () {

                it('should return hello!', function () {

                    var myModule = require('../../lib/myModule.js');

                    expect(myModule.myFunc()).toEqual("Hello!");

                });
            });
        });


6. Add unit test configuration test/config/unit.js

        basePath = '../..';

        files = [
            JASMINE,
            JASMINE_ADAPTER,
            'vendor/jquery/jquery.min.js',
            'dist-test/**/*.js'
        ];

        reporters = 'dots';
        port = 8089;
        runnerPort = 9109;
        urlRoot = '/__test/';
        colors = true;
        logLevel = LOG_INFO;
        autoWatch = false;
        autoWatchInterval = 0;
        browsers = ['Chrome'];
        singleRun = true;

7. Save jquery to a local vendor folder for testing

        open chrome dev-tools
        choose sources tab
        find jquery and save-as

8. Run grunt

        cd client
        grunt test

9. Fix the failing unit test by changing lib/myModule.js to

    ... an exercise :)



[CodeHub](http://www.codehub.org.uk/)

<duncan.woods@cliftoninteractive.com>