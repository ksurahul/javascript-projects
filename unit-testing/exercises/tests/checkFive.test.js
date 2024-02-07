const checkFive = require('../checkFive.js');

describe("checkFive", function(){

    test("The number being entered is less than 5 so the function should return the value less than 5", function() {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });

    test("The number being entered is greater than 5 so should return value value greater than 5", function() {
        let output = checkFive(6);
        expect(output).toEqual('6 is greater than 5.')
    })

    test("The number being entered is equal to 5 so it should return that", function() {
        let output = checkFive(5);
        expect(output).toEqual('5 is equal to 5.')
    })

 });