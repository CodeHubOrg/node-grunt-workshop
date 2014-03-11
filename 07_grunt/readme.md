Lesson 7 - Use grunt for manual build actions
=============================================

What is grunt?

- a nodejs application for running javascript tasks
- a grunt script defines the tasks to perform
- each task uses an npm module
- each module is recorded in package.json
- each task uses json configuration

http://gruntjs.com/


Lets setup a gruntfile for running browserify
---------------------------------------------

1. Remove global browserify

        npm uninstall browserify -g

2. Create client/package.json

        {
            "author": "Duncan Woods",
            "name": "codehub",
            "description": "Tutorial for grunt",
            "homepage": "http://www.codehub.org.uk/",
            "version": "0.0.1",
            "private": false,
            "dependencies": {
                "grunt": "~0.4.0",
                "grunt-contrib-clean": "~0.4.0",
                "grunt-contrib-copy": "~0.4.0",
                "grunt-contrib-jshint": "~0.2.0",
                "grunt-contrib-concat": "~0.1.3",
                "grunt-contrib-uglify": "~0.1.1",
                "grunt-karma": "~0.4.4",
                "grunt-contrib-watch": "~0.3.1",
                "browserify": "3.32.1"
            },
            "devDependencies": {
            }
        }

3. Create a grunt file

        module.exports = function (grunt) {

            grunt.loadNpmTasks('grunt-browserify');

            grunt.registerTask('default', ['browserify']);

            grunt.initConfig({

                browserify: {
                  dist: {
                    src: '../lib/**/*.js',
                    dest: 'dist/client.js'
                  }
                }

            });
        };

4. cd to client folder, run grunt

        cd client
        grunt

5. Restart the server

        cd server
        node server.js

6. Browse to site

        http://localhost:4242/


[CodeHub](http://www.codehub.org.uk/)

<duncan.woods@cliftoninteractive.com>