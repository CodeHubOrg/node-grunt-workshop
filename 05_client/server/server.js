var myModule = require('../lib/myModule.js');
var express = require('express');
var http = require('http');

var app = express();

var rootFolder = __dirname;

app.use(express.static(rootFolder + '/../client/'));
app.use('/js', express.static(rootFolder + '/../lib/'));

app.get('/:who', function (req, res) {

    console.log("req: " + req.url);

    res.send(
        '<html>' + myModule.myFunc(req.params.who) + '</html>'
    );
});

http.createServer(app).listen(4242);

console.log("started on port 4242");
