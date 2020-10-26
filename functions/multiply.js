function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(prompt));
};

function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
};

let numberOne = getNumber("Enter the first number: ");
let numberTwo = getNumber("Enter the second number: ");

console.log(`${numberOne} * ${numberTwo} = ${multiply(numberOne, numberTwo)}`);
