const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
// const name = prompt("What's your name? ");
// console.log(`Hi, I'm ${name}.`);

var firstNumber = 5;
var secondNumber = 2;
const operation = "/";

if (operation === "+") {
  console.log(firstNumber + secondNumber);
} else if (operation === "-") {
  console.log(firstNumber - secondNumber);
} else if (operation === "/") {
  console.log(firstNumber / secondNumber);
} else if (operation === "*") {
  console.log(firstNumber * secondNumber);
} else {
  console.log("enter one of these operations (+, -, /, *)");
}
