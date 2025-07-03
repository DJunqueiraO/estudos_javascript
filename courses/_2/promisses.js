const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromisse = util.promisify(readFile);
// const writeFilePromisse = util.promisify(writeFile);

// const readFilePromisse = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(
//             path, 'utf8', 
//             (error, data) => {
//                 if(error) {
//                     reject(error);
//                 } else {
//                     resolve(data);
//                 }
//             }
//         )
//     })
// }

// performReadFile('courses/_2/fs/content/sub/lero.txt')
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

const start = async () => {
    try {
        const lero = await readFile('courses/_2/fs/content/sub/lero.txt', 'utf8');
        const _lero = await readFile('courses/_2/fs/content/sub/_lero.txt', 'utf8');
        await writeFile(
            'courses/_2/fs/content/sub/lero_lero.txt',
            `Here is the both leros: \n\n${lero}\n${_lero}`
        )
        console.log('1.', lero, '\n2.', _lero);
    } catch(error) {
        console.error('Error in start:', error);   
    }
}

start()