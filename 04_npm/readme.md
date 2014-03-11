Lesson 4 - NPM
==============

The magic starts happening when we install modules from the Node Package Manager (npm). This is an online repository of plug-in modules for node applications.

[https://www.npmjs.org/](https://www.npmjs.org/)

Install express from npm
------------------------

1. Install express using the command line

        cd server
        npm install express

2. Investigate the files in server/node_modules

- package.json
- another node_modules folder
- lib folder of CommonJS modules

3. Run the server

        cd server
        node server.js

4. Browse to the address

        http://localhost:4242/codehub


Use a package to manage our dependencies
----------------------------------------

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

6. Install versioned dependencies from package.json

        cd server
        npm install

7. Restart the server


[CodeHub](http://www.codehub.org.uk/)

<duncan.woods@cliftoninteractive.com>