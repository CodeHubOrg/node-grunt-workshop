Lesson 2 - Modules
==================

Node.js uses CommonJS for module loading. This allows us to:

 - decompose complex programs to simple modules
 - isolate independent parts
 - dynamically load javascript modules at run-time
 - support plug-in architectures...


Convert script into module
--------------------------

1. Create lib/myModule.js

2. Add a function definition e.g.

        exports.myFunc = function(who) {
            return 'Hello ' + who + '!';
        };

3. Replace server/server.js with

        var myModule = require('../lib/myModule.js');

        console.log(
            myModule.myFunc('CodeHub')
        );

4. Run node

        node server.js


[CodeHub](http://www.codehub.org.uk/)

<duncan.woods@cliftoninteractive.com>