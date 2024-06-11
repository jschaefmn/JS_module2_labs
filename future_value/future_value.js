"use strict";
// this variable tells us if we should run the script again
let shouldRepeat = "y";

// main loop
do {
    // get investment amount - loop until user enters a number
    let investment = 0;
    do {
        investment = parseFloat(
        prompt("Enter investment amount as xxxxx.xx", 10000));
    } while ( isNaN(investment) || investment <= 0);
    // loop while investment IS NOT a number OR investment <= 0
    

    // get interest rate - loop until user enters a number
    let rate = 0;
    do {
        rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
    } while ( isNaN(rate) || rate <= 0 || rate >= 15);
    // loop while rate IS NOT a number OR rate <= 0
    // OR rate >= 15

    // get number of years - loop until user enters a number
    let years = 0;
    do {
        years = parseInt(prompt("Enter number of years", 10));
    } while ( isNaN(years) || years <= 0);
    // loop while years IS NOT a number OR years <= 0

    // display the input values
    document.write(`<h4>Investment amount = ${investment} Interest rate = ${rate} Years = ${years}</h4>`);

    // calulate future value
    let futureValue = investment;
    for (let i = 1; i <= years; i++ ) {
        const interest = futureValue * rate / 100;
        futureValue = futureValue + (futureValue * rate / 100);
        // display future values and interest
        document.write(`<p>Year=${i} Interest=${interest.toFixed(2)} Value=${futureValue.toFixed(2)}</p>`);
    }
    // prompt user to see if program should run again
    shouldRepeat = prompt("Run this again? (y/n)");

} while(shouldRepeat == 'y' || shouldRepeat == 'Y');