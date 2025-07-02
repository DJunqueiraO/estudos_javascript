const path = require('path');

// console.log(path.sep); // Outputs the platform-specific path separator (e.g., '/' on Unix, '\' on Windows)

// const filePath = path.join('content', 'sub', 'test.txt');
// console.log(filePath); // Outputs the joined path

// const base = path.basename(filePath);
// console.log(base); // Outputs the last portion of the path (e.g., 'test.txt

const absolute = path.resolve(__dirname, 'content', 'sub', 'taest.txt');
// console.log(absolute); // Outputs the absolute path to the file

const exists = require('./exists.js');
console.log(`Does ${absolute} exist? ${exists(absolute)}`); // Outputs whether the

// verify if file exists
// const fs = require('fs');
// fs.access(absolute, fs.constants.F_OK, (err) => {
//     if (err) {
//         console.error(`${absolute} does not exist`);
//     } else {
//         console.log(`${absolute} exists`);
//     }
// });