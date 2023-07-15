//Creating a writeable stream
const readline = require("readline");
const fs = require("fs");

const myInterface = readline.createInterface({
  input: fs.createReadStream("shoppingList.txt"),
});

const fileStream = fs.createWriteStream("shoppingResults.txt");

const transformData = (line) => {
  fileStream.write(`They were out of: ${line}\n`);
};
// Let’s assign our transformData function to execute whenever a 'line' event is emitted on the myInterface stream.
myInterface.on("line", transformData);

//Timer Module
setImmediate(() => {
  console.log("I got called right away!");
});
