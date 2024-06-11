"use strict";

let highestScore = 0;
const maxScore = 100;
const minScore = 0;
const scores = [];

// use do-while loop to get the scores from the user
let score = 0;
do {
    score = parseInt(prompt("Enter a test score, or enter -1 to end scores", -1));

    if (score >= minScore && score <= maxScore) {
        // add score to end of scores array
        scores[scores.length] = score;
    } else if (score != -1){
        alert(`Score must by a valid number from ${minScore} through ${maxScore}`);
    }
} while(score != -1);

if (scores.length > 0) {
    // use a for-in loop to add each score to total, and display score
    let total = 0;
    for (let i in scores) {
        total = total + scores[i];
        document.write(`<p>Score ${parseInt(i) + 1}: ${scores[i]}</p>`);
    }

    //calculate and display the average
    const average = parseInt(total/scores.length);
    document.write(`<p>Average score is ${average}</p>`);

    for(let score of scores) {
        // if the current score is higher than the highest score
        if(score > highestScore) {
            // replace the highest score with current score
            highestScore = score;
        }
    }
    document.write(`<p>Highest score is ${highestScore}</p>`);
}