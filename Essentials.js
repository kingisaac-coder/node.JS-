// Here we require in the 'events' module and save a reference to it in an events variable
let events = require("events");

let listenerCallback = (data) => {
  console.log("Celebrate " + data);
};
//creating a new variable and assigning it
let myEmitter = new events.EventEmitter();
//Invoking .on() and passing the method 'celebration' as event listenerCallback function
myEmitter.on("celebration", listenerCallback);
//Invoking the .emit() and string inside as an arguement
myEmitter.emit("celebration", "I,ve made it");
