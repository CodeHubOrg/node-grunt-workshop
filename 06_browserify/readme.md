Lesson 6 - Browserify
=====================

    https://www.npmjs.org/package/browserify


Lets use browserify to be able to use CommonJS module in the client
-------------------------------------------------------------------

1. Create /dist folder

2. Install browserify

        npm install browserify -g

2. Run browserify

        browserify lib/client.js > dist/client.js

3. In server/server.js change the static route for the js files

        app.use('/js', express.static(rootFolder + '/../dist/'));

4. Restart the server

        node server.js

5. Browse to site

        http://localhost:4242/


[CodeHub](http://www.codehub.org.uk/)

<duncan.woods@cliftoninteractive.com>