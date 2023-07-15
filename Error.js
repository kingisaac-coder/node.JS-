const api = require("./api.js");

// An error-first callback
let errorFirstCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong. ${err}\n`);
  } else {
    console.log(`Something went right. Data: ${data}\n`);
  }
};
//Invoking the api method with the problematic input as the string.
api.errorProneAsyncApi("problematic input", errorFirstCallback);
