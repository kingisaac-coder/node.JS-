// learning core modules
//Node.js Modules
"_http_agent",
  "_http_client",
  "_http_common",
  "_http_incoming",
  "_http_outgoing",
  "_http_server",
  "_stream_duplex",
  "_stream_passthrough",
  "_stream_readable",
  "_stream_transform",
  "_stream_wrap",
  "_stream_writable",
  "_tls_common",
  "_tls_wrap",
  "assert",
  "assert/strict",
  "async_hooks",
  "buffer",
  "child_process",
  "cluster",
  "console",
  "constants",
  "crypto",
  "dgram",
  "diagnostics_channel",
  "dns",
  "dns/promises",
  "domain",
  "events",
  "fs",
  "fs/promises",
  "http",
  "http2",
  "https",
  "inspector",
  "module",
  "net",
  "os",
  "path",
  "path/posix",
  "path/win32",
  "perf_hooks",
  "process",
  "punycode",
  "querystring",
  "readline",
  "readline/promises",
  "repl",
  "stream",
  "stream/consumers",
  "stream/promises",
  "stream/web",
  "string_decoder",
  "sys",
  "timers",
  "timers/promises",
  "tls",
  "trace_events",
  "tty",
  "url",
  "util",
  "util/types",
  "v8",
  "vm",
  "worker_threads",
  "zlib";

//The console Module
// The console modules is one of the mode commonly used Node.js Core
// The console object provides many of the same familiar methods such as:
// .log() — to print messages to the terminal.
// .assert() — to print a message to the terminal if the value is falsy.
// .table() — to print out a table in the terminal from an object or array.

const petsArray = ["dog", "cat", "bird", "monkey"];

// Add console methods below!
console.log(petsArray);
console.table(petsArray);
console.assert(petsArray.length > 5);

//Learning The Process Module
let initialMemory = process.memoryUsage().heapUsed;
let word = process.argv[2];

console.log(`Your word is ${word}`);

// Create a new array
let wordArray = [];

// Loop 1000 times, pushing into the array each time
for (let i = 0; i < 1000; i++) {
  wordArray.push(`${word} count: ${i}`);
}

console.log(
  `Starting memory usage: ${initialMemory}. \nCurrent memory usage: ${
    process.memoryUsage().heapUsed
  }. \nAfter using the loop to add elements to the array, the process is using ${
    process.memoryUsage().heapUsed - initialMemory
  } more bytes of memory.`
);

// OS Module

// os.type() — to return the computer’s operating system.
// os.arch() — to return the operating system CPU architecture.
// os.networkInterfaces() — to return information about the network interfaces of the computer, such as IP and MAC address.
// os.homedir() — to return the current user’s home directory.
// os.hostname() — to return the hostname of the operating system.
// os.uptime()

const os = require("os");

const server = {
  type: os.type(),
  architecture: os.arch(),
  uptime: os.uptime(),
};
console.log(server);

//The Util Module
//Util module is used for maintaining and debugging your code

// Require in trails module from trails.js
const trails = require("./trails.js");
// Require util module here!
const util = require("util");
// Simulate database call to search trails module for specified trail
const getTrailDistance = (trail, callback) => {
  return setTimeout(() => {
    if (trails.hasOwnProperty(trail)) {
      const foundTrail = trails[trail];
      callback(null, foundTrail);
    } else {
      callback(new Error("Trail not found!"));
    }
  }, 1000);
};

// Callback function to send an error in the case of an error, or to handle trail data if a trail was found successfully.
function callback(error, trailData) {
  if (error) {
    console.error(error.message);
    process.exit(1);
  } else {
    const mi = trailData.miles;
    const nickname = trailData.nickname;
    console.log(`The ${nickname} is ${mi} miles long!`);
  }
}

getTrailDistance("North Country", callback);

// Promisfy below!

const getTrailDistancePromise = util.promisify(getTrailDistance);

getTrailDistancePromise("North Country")
  .then((foundTrail) => {
    const nickname = foundTrail.nickname;
    const mi = foundTrail.miles;
    console.log(`The ${nickname} is ${mi} miles long!`);
  })
  .catch((error) => {
    console.log("Trail not found!", error);
  });
