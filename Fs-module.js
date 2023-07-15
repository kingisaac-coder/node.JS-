// const fs = require("fs");

// let readDataCallback = (err, data) => {
//   if (err) {
//     console.log(`Something went wrong: ${err}`);
//   } else {
//     console.log(`Provided file contained: ${data}`);
//   }
// };

// fs.readFile("./file.txt", "utf-8", readDataCallback);

const fs = require("fs");

let secretWord = null;

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};
fs.readFile("./finalFile.txt", "utf-8", readDataCallback);
//determining the secret word
secretWord = "cheeseburgerpizzabagels";
