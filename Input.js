//New Lesson
//User Input/Output

//stdout stands for standard output.

//Making a guessing game
let { testNumber } = require("./game.js");

process.stdout.write(
  'I\'m thinking of a number from 1 through 10. What do you think it is? \n(Write "quit" to give up.)\n\nIs the number ... '
);

let playGame = (userInput) => {
  let input = userInput.toString().trim();
  testNumber(input);
};
//reading the input from the user
process.stdin.on("data", playGame);
