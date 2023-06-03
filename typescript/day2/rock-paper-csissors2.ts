import { parse } from "path";

//read from a file
var fs = require('fs');
var data = fs.readFileSync('./typescript/day2/input.txt', 'utf8');
var lines = data.split('\n');
console.log(lines);

//A = rock
//B = paper
//C = scissors

//X = p2 loss
//Y = draw
//Z = p2 win

//score is calculated as follows:
// 0 if the round was a loss
// 3 if the round was a draw
// 6 if the round was a win
//plus points based on what player2 played where
//rock = 1
//paper = 2
//scissors = 3
function roundScore(round: string) {
    if (round == '') {
        return 0;
    }

    var player1 = round.split(' ')[0];
    var outcome = round.split(' ')[1];
    outcome = outcome.split('\r')[0];
    if (player1 == 'A' && outcome == 'X') {
        // loss and p1 played rock
        //so p2 played scissors
        return 0 + 3;
    }
    if (player1 == 'A' && outcome == 'Y') {
        // draw and p1 played rock
        //so p2 played rock
        return 3 + 1;
    }
    if (player1 == 'A' && outcome == 'Z') {
        // win and p1 played rock
        //so p2 played paper
        return 6 + 2;
    }
    //_____________________________________________________
    if (player1 == 'B' && outcome == 'X') {
        // loss and p1 played paper
        //so p2 played rock
        return 0 + 1;
    }
    if (player1 == 'B' && outcome == 'Y') {
        // draw and p1 played paper
        //so p2 played paper
        return 3 + 2;
    }
    if (player1 == 'B' && outcome == 'Z') {
        // win and p1 played paper
        //so p2 played scissors
        return 6 + 3;
    }
    //_____________________________________________________
    if (player1 == 'C' && outcome == 'X') {
        // loss and p1 played scissors
        //so p2 played paper
        return 0 + 2;
    }
    if (player1 == 'C' && outcome == 'Y') {
        // draw and p1 played scissors
        //so p2 played scissors
        return 3 + 3;
    }
    if (player1 == 'C' && outcome == 'Z') {
        // win and p1 played scissors
        //so p2 played rock
        return 6 + 1;
    }
    return 0;
    
}

var sum = 0;
for (let i = 0; i < lines.length; i++) {
    var round = lines[i];
    sum += roundScore(round);
}
console.log ('sum: ' + sum);