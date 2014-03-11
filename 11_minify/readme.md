Lesson 11 - Minify our javascript
=================================


1. In gruntfile.js, load the karma module

        grunt.loadNpmTasks('grunt-contrib-uglify');

2. Add to the deafult build

        grunt.registerTask('default', ['jshint', 'test', 'browserify', 'uglify']);

3. Add configuration to init config

        uglify: {
            dist: {
                src: '../dist/client.js',
                dest: '../dist/client.min.js'
            }
        }

4. Update our webpage /client/index.html to use the minified version

        <script src="/js/client.min.js"></script>

5. Run grunt

        cd client
        grunt


[CodeHub](http://www.codehub.org.uk/)

<duncan.woods@cliftoninteractive.com>