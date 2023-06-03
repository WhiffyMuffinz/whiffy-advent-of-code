import { parse } from "path";

//read from a file
var fs = require('fs');
var data = fs.readFileSync('./typescript/day1/calories.txt', 'utf8');
let largestSum = 0;
let currentSum = 0;

const lines = data.split(/\r?\n/);

for (var line of lines) {
    if (line.length > 0) {
        currentSum += parseInt(line);
    } else {
        if (currentSum >largestSum) {
            largestSum = currentSum;
        }
        currentSum = 0;
    }
}
console.log(largestSum);