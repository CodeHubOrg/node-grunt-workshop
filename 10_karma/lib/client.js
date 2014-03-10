var myModule = require('./myModule.js');

$(document).ready(function() {
    $('#greeting').text(myModule.myFunc("codehub"));
});