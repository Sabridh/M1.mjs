import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som;
let deling;
let product;
let verschil;

let getal1 = 45;
let getal2 = 22;          

som = getal1 + getal2;
deling = getal1 / getal2;
product = getal1 * getal2;
verschil = getal1 - getal2;

console.log("de som is "+ som);
console.log("de deling is "+ deling);
console.log("de product is "+ product);
console.log("de verschil is "+ verschil);