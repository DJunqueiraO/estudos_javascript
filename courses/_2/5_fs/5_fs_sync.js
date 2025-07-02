const {
    readFileSync,
    writeFileSync
} = require('fs');

const lero = readFileSync('./content/sub/lero.txt', 'utf8');
const _lero = readFileSync('./content/sub/_lero.txt', 'utf8');

const lero_lero = lero + '\n' + _lero;
console.log(lero_lero);

writeFileSync(
    './content/sub/lero_lero.txt',
    `Here is the both leros: \n\n${lero_lero}`,
    //{ flag: 'a' } // 'a' flag to append to the file
);