// The .alloc() method creates a new Buffer object with the size specified as the first parameter. .alloc() accepts three arguments:
//Size: Required. The size of the buffer
// Fill: Optional. A value to fill the buffer with. Default is 0.
// Encoding: Optional. Default is UTF-8.

//The .toString() method translates the Buffer object into a human-readable string. It accepts three optional arguments:
//Encoding: Default is UTF-8.
// Start: The byte offset to begin translating in the Buffer object. Default is 0.
// End: The byte offset to end translating in the Buffer object. Default is the length of the buffer. The start and end of the buffer are similar to the start and end of an array, where the first element is 0 and increments upwards.

//The .from() method is provided to create a new Buffer object from the specified string, array, or buffer. The method accepts two arguments:
// Object: Required. An object to fill the buffer with.
// Encoding: Optional. Default is UTF-8.

//The .concat() method joins all buffer objects passed in an array into one Buffer object. .concat() comes in handy because a Buffer object can’t be resized. This method accepts two arguments:
// Array: Required. An array containing Buffer objects.
// Length: Optional. Specifies the length of the concatenated buffer.

// Allocate buffer of size 15 filled with 'b'
const bufferAlloc = Buffer.alloc(15, "b");
console.log(bufferAlloc);
// Create buffer1 with 'hello' and buffer2 with 'world'
const buffer1 = Buffer.from("hello");
const buffer2 = Buffer.from("world");

// Combine buffer1 and buffer2
const bufferArray = [buffer1, buffer2];
const bufferConcat = Buffer.concat(bufferArray);
// Translate buffer to string
const bufferString = bufferConcat.toString();

//  the appropriate `console.log()` to ouput to console
console.log(bufferAlloc);
console.log("Buffer 1:", buffer1, "Buffer 2:", buffer2);
console.log(bufferConcat);
console.log(bufferString);
