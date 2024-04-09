require('dotenv').config(); // one liner

// the above is equivalent to the next two lines
// const dotenv = require('dotenv');
// dotenv.config();
const pokemonPrinterFile = require("./pokemonPrinter");

console.log(process.env.ENVIRONMENT_MESSAGE);



console.log("Terminal app is running!");



pokemonPrinterFile.pokemonPrinter();

console.log("Bye bye, terminal app finished!");

