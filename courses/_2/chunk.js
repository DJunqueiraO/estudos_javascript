const { createReadStream } = require('fs');
const stream = createReadStream('./courses/_2/fs/content/sub/lero.txt')

stream.on('data', (chunk) => {
    console.log(chunk.toString());
});

stream.on('error', (error) => {
    console.error('Error reading stream:', error);
});