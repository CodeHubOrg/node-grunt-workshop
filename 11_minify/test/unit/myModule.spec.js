describe('test myModule', function () {

    describe('with codehub', function () {

        it('should return hello codehub!', function () {

            var myModule = require('../../lib/myModule.js');

            expect(myModule.myFunc("codehub")).toEqual("Hello codehub!");

        });
    });

    describe('with no argument', function () {

        it('should return hello!', function () {

            var myModule = require('../../lib/myModule.js');

            expect(myModule.myFunc()).toEqual("Hello!");

        });
    });
});