// creating a program that reads Item off a shopping list
const readline = require("readline");
const fs = require("fs");

const myInterface = readline.createInterface({
  input: fs.createReadStream("shoppingList.txt"),
});

const printData = (data) => {
  console.log(`Item: ${data}`);
};
myInterface.on("line", printData);
