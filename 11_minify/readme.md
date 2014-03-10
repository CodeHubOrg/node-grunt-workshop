Lesson 11 - Minify our javascript
=================================


1. In gruntfile.js, load the karma module

    grunt.loadNpmTasks('grunt-contrib-uglify');

2. Create a special test task

    grunt.registerTask('test', ['browserify:test', 'karma:unit']);
    grunt.registerTask('default', ['jshint', 'test', 'browserify', 'uglify']);

3. Add configuration to init config

        uglify: {
            dist: {
                src: '../dist/client.js',
                dest: '../dist/client.min.js'
            }
        }

4. Update our webpage /client/index.html

    <script src="/js/client.min.js"></script>

5. Run grunt

    grunt


[CodeHub](http://www.codehub.org.uk/)

<duncan.woods@cliftoninteractive.com>