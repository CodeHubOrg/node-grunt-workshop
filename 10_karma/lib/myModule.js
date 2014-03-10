exports.myFunc = function(who) {

    if (who === null || who === undefined) {
        return 'Hello!';
    }
    else {
        return 'Hello ' + who + '!';
    }
};