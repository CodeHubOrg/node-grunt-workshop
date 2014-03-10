Lesson 4 - NPM
==============

The magic starts happening when we use modules from the Node Package Manager (npm). This is an online repository of plug-in modules for node applications.

https://www.npmjs.org/

Lets get the express module from npm
------------------------------------

1. Install express using the command line

        npm install express

2. Run the server

        node server.js

3. Browse to the address

        http://localhost:4242/codehub


Let use a package to manage our dependencies instead
----------------------------------------------------

4. Delete folder node_modules

5. Create package.json

        {
            "author": "Duncan Woods",
            "name": "codehub",
            "description": "Tutorial for grunt",
            "homepage": "http://www.codehub.org.uk/",
            "version": "0.0.1",
            "private": false,
            "dependencies": {
                "express": "~3.0"
            },
            "devDependencies": {
            }
        }

6. Install project

        npm install

7. Rerun the server


[CodeHub](http://www.codehub.org.uk/)

<duncan.woods@cliftoninteractive.com>