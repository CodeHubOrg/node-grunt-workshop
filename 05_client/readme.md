Lesson 5 - Client
=================

The magic starts happening when we use modules from the Node Package Manager (npm). This is an online repository of plug-in modules for node applications.

https://www.npmjs.org/

Lets set up a simple web page
-----------------------------

1. Create /client/index.html

    <html>
        <head>
            <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
            <script src="/js/client.js"></script>
        </head>
        <body>
            <h1>Code Hub Demo</h1>
            <p id="greeting"></p>
        </body>
    </html>


2. Create /lib/client.js

    var myModule = require('./myModule.js');

    $(document).ready(function() {
        $('#greeting').text(myModule.myFunc("codehub"));
    });


3. Use express to serve up static folders by inserting new routes to server.js before app.get

    var rootFolder = __dirname;
    app.use(express.static(rootFolder + '/../client/'));
    app.use('/js', express.static(rootFolder + '/../lib/'));


4. Restart the server

    node server.js


5. Browse to site

    http://localhost:4242/

    ** Uncaught ReferenceError: require is not defined **


[CodeHub](http://www.codehub.org.uk/)

<duncan.woods@cliftoninteractive.com>