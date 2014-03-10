Lesson 10 - Unit testing
========================



Lets add jshint to
------------------------------------

1. In gruntfile.js, load the karma module

        grunt.loadNpmTasks('grunt-karma');

2. Create a special test task

        grunt.registerTask('test', ['browserify:test', 'karma:unit']);
        grunt.registerTask('default', ['jshint', 'test', 'browserify']);

3. Add configuration to init config

        karma: {
            unit: {
                configFile: '../test/config/unit.js'
            }
        }


Lets add some jasmine unit tests for our function
-------------------------------------------------

4. Add unit tests to test/unit/myModule.spec.js

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


5. Add unit test configuration test/config/unit.js

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

4. Run grunt

        grunt test

5. Fix the failing unit test by changing lib/myModule.js to

    ... an exercise :)



[CodeHub](http://www.codehub.org.uk/)

<duncan.woods@cliftoninteractive.com>