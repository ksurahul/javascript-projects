const whoWon = require('../RPS.js');

describe("whoWon", function(){

    test("This should return players tied", function() {
        let output = whoWon('rock', 'rock');
        expect(output).toEqual('TIE!');
    });

    test("This should return as player 2 wins", function() {
        let output = whoWon('rock', 'paper');
        expect(output).toEqual('Player 2 wins!')
    })

    test("This should return as player 1 wins", function() {
        let output = whoWon('paper', 'rock');
        expect(output).toEqual('Player 1 wins!')
    })

 });