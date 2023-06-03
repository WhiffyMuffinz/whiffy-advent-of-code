import { parse } from "path";

//read from a file
var fs = require('fs');
var data = fs.readFileSync('./typescript/calories.txt', 'utf8');
let largestSums = [0,0,0];
let currentSum = 0;

const lines = data.split(/\r?\n/);

for (var line of lines) {
    if (line.length > 0) {
        currentSum += parseInt(line);
    } else {
        if (currentSum > largestSums[0]) {
            largestSums[0] = currentSum;
        }
        else if (currentSum > largestSums[1]) {
            largestSums[1] = currentSum;
        }
        else if (currentSum > largestSums[2]) {
            largestSums[2] = currentSum;
        }
        currentSum = 0;
    }
}
console.log(largestSums[0]);
console.log(largestSums[1]);
console.log(largestSums[2]);
console.log(largestSums[0] + largestSums[1] + largestSums[2]);
