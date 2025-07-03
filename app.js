const http = require('http');   
const fs = require('fs');
const path = './courses/_2/fs/content/sub/big.txt'

// for( let i = 0; i < 100000; i++) {
//     fs.writeFileSync(
//         path, 
//         `lerox${i}\n`, 
//         { flag: 'a' }); 
// }

http
    .createServer((request, response) => {
        // const lero_lero = fs.readFileSync('./courses/_2/fs/content/sub/lero_lero.txt', 'utf-8');
        // response.end(lero_lero)
        const fileStream = fs.createReadStream('./courses/_2/fs/content/sub/big.txt', 'utf-8');
        fileStream.on('open', () => {
            fileStream.pipe(response);
        });
        fileStream.on('error', (error) => {
            response.end(`Error reading file: ${error.message}`);
        });
    })
    .listen(5000)