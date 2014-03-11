Lesson 9 - Static Analysis
==========================

Lint is a classic static analysis tool for C to help catch common faults. There are two javascript version JSLint and JSHint. JSHint is...


Lets integrate jshint to our grunt build
----------------------------------------

1. In gruntFile.js, load the jshint task

        grunt.loadNpmTasks('grunt-contrib-jshint');

2. Add to a jshint to the default build

        grunt.registerTask('default', ['jshint', 'browserify']);

3. Add configuration to init config

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

    ** note ***, do include that naughty trailing comma!

4. Run grunt

        cd client
        grunt

5. Expected error message e.g.

        C:\Users\Duncan\Documents\codehub\09_jshint\client>grunt
        Running "jshint:files" (jshint) task
        Linting gruntFile.js...ERROR
        [L49:C10] Extra comma. (it breaks older versions of IE)
                },

        Warning: Task "jshint:files" failed. Use --force to continue.

6. Play around with myModule and see what errors are caught


[CodeHub](http://www.codehub.org.uk/)

<duncan.woods@cliftoninteractive.com>