Lesson 8 - Watch task
=====================

Basic flow for adding a grunt task

1. Find something you like e.g. less, sass etc.
2. Add dependency to package.json
3. npm install
4. gruntFile - load module with loadNpmTasks
5. gruntFile - add task with registerTask
6. gruntFile - configure task in initconfig


Lets automatically run grunt on any changes to our js
-----------------------------------------------------

1. in gruntfile.js, load the watch task

        grunt.loadNpmTasks('grunt-contrib-watch');

2. Register a new task in client/gruntFile.js

        grunt.registerTask('build-watch', ['build:watch']);

        // Print a timestamp (useful for when watching)
        grunt.registerTask('timestamp', function () {
            grunt.log.subhead(Date());
        });

3. Add configuration to init config in client/gruntFile.js

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

4. Run the grunt watch task

        grunt watch

5. Change the message in myModule.js & refresh the web page


[CodeHub](http://www.codehub.org.uk/)

<duncan.woods@cliftoninteractive.com>