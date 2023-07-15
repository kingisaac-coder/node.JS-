//Initialization
//When we run node init it initalizes the node and returns the following
//nodemon is used to restart a node program anytime a new file is added and saved. It saves time and it's effective in development
//Devlopment dependencies are used for making development easier and more efficient

//Implementing Node modules
//Modules are reusable pieces of code in a file that can be exported and then imported for use in another file.

//Writing a program that displays the freezing and boiling of water in Fahrenheit but you only know freezing to be  = 0 and boiling=100 all in celcius but we know how to convert from celcius to fahrenheit
/* water-limits.js */
function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = celsiusToFahrenheit(freezingPointC);
const boilingPointF = celsiusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);

//module.exports

/* converters.js */
function celsiusToFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}

module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

module.exports.fahrenheitToCelsius = function (fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
};

//learning .require()

//updating the water-limts with the .require module

/* water-limits.js */
// const converters = require('./converters.js');

// const freezingPointC = 0;
// const boilingPointC = 100;

// const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
// const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);

// console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
// console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);

//Complete the shape-area.js module. Your module must declare and export two functions with the following signatures:

// circleArea(radiusLength).
// squareArea(sideLength).
// You may create these as either named functions or anonymous function expressions.

/* shape-area.js */
const PI = Math.PI;

function circleArea(r) {
  return PI * r * r;
}
function squareArea(side) {
  return side * side;
}
// Define and export circleArea() and squareArea() below
module.exports.circleArea = circleArea;

module.exports.squareArea = squareArea;
