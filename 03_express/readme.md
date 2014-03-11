Lesson 3 - Express
==================

Express is a popular http and routing library for node

http://expressjs.com/


Lets use the express to serve http
----------------------------------

1. In server/server.js, use Express to create an http server:

        var myModule = require('../lib/myModule.js');
        var express = require('express');
        var http = require('http');

        var app = express();

        app.get('/:who', function (req, res) {

            console.log("req: " + req.url);

            res.send(
                '<html>' + myModule.myFunc(req.params.who) + '</html>'
            );
        });

        http.createServer(app).listen(4242);

        console.log("started on port 4242");


2. Run the server

        cd server
        node server.js

4. Expected error message e.g.

        ** Error: Cannot find module 'express' **


[CodeHub](http://www.codehub.org.uk/)

<duncan.woods@cliftoninteractive.com>