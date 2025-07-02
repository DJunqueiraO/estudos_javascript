const {
    readFileSync,
    writeFileSync
} = require('fs');

const first = readFileSync('./content/sub/first.txt', 'utf8');
const second = readFileSync('./content/sub/second.txt', 'utf8');

console.log(`${first}\n${second}`);