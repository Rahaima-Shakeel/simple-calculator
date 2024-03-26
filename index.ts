#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumer" },
  {
    message: "Select one of the operators to operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumer);
} else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumer);
} else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumer);
} else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumer);
} else {
    console.log("Please Select Valid Operator");
} 
