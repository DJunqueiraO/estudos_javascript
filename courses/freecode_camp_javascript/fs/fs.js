const {
    readFile,
    writeFile
} = require('fs');

readFile('./content/sub/lero.txt', 'utf8', (err, res) => {
    if(err) {
        console.error(err);
        return;
    }
    const lero = res;
    readFile('./content/sub/_lero.txt', 'utf8', (err, res) => {
        if(err) {
            console.error(err);
            return;
        }
        const _lero = res;
        writeFile(
            './content/sub/lero_lero.txt',
            `Here is the both leros: \n\n${lero}\n${_lero}`,
            (err) => {
                if(err) {
                    console.error(err);
                    return;
                }
                console.log('File written successfully');
            }
        );
    })
})