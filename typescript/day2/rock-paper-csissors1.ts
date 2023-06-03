import { parse } from "path";

//read from a file
var fs = require('fs');
var data = fs.readFileSync('./typescript/day2/input.txt', 'utf8');
var lines = data.split('\n');
console.log(lines);

//A = rock
//B = paper
//C = scissors

//X = rock
//Y = paper
//Z = scissors


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
    var player2 = round.split(' ')[1];
    player2 = player2.split('\r')[0];
    if ((player1 == 'A' && player2 == 'X') || (player1 == 'B' && player2 == 'Y') || (player1 == 'C' && player2 == 'Z')) {
        return 3 + playerChoice(player2);
    }
    if (player1 == 'A' && player2 == 'Z') {
        return 0 + playerChoice(player2);
    }
    if (player1 == 'C' && player2 == 'Y') {
        return 0 + playerChoice(player2);
    }
    if (player1 == 'B' && player2 == 'X') {
        return 0 + playerChoice(player2);
    }
    // console.log('player1: ' + player1 + '\nplayer2: ' + player2);
    return 6 + playerChoice(player2);
}

function playerChoice(choice: string) : number {
    if (choice == 'X') {
        return 1; //rock
    }
    if (choice == 'Y') {
        return 2; //paper
    }
    if (choice == 'Z') {
        return 3; //scissors
    }
    return 0;

}

console.log('round score: ' + roundScore('C Z'));

var sum = 0;

for (let i = 0; i < lines.length; i++) {
    var round = lines[i];
    sum += roundScore(round);
}
console.log ('sum: ' + sum);