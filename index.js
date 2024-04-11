require('dotenv').config(); // one liner

// the above is equivalent to the next two lines
// const dotenv = require('dotenv');
// dotenv.config();
const pokemonPrinterFile = require("./pokemonPrinter");

console.log(process.env.ENVIRONMENT_MESSAGE);



console.log("Terminal app is running!");

// Style 1 for setting up prompt-sync and adding in optional arguments)
var prompt = require('prompt-sync')({sigint: true});

// Style 2 for setting up prompt-sync
let promptPackage = require('prompt-sync');
let promptInstance = promptPackage({sigint: true});

// get input from the user

// var n = prompt('What number of pokemon do you want to see?');

function app() {
    let userWantsToExit = false;

do {

    let n = parseFloat(prompt("What number of Pokemon do you want to see?"));

    console.log(typeof(n));
    console.log("Input is not a number: " + Number.isNaN(n));

    if (Number.isNaN(n)) {
        throw new Error("User did not enter a number!");
    }
 
    console.log("You entered " + n);

    let userInputToExit = prompt("Would you like to try again??");

    if (userInputToExit == "y") {
        userWantsToExit = false;
    } else {
        userWantsToExit = true;
    }

} while (userWantsToExit == false);
}

try {
    app();
} catch (error) {
    console.log("Gracefully shutting down...");
    console.log(error.message);
}

// console.log("User entered: " + n);
// console.log(typeof(n));

// let nAsNumber = parseFloat(n);
// console.log(typeof(nAsNumber));


// pokemonPrinterFile.pokemonPrinter();

// console.log("Bye bye, terminal app finished!");

