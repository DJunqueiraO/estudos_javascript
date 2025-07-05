const http = require('http');

const server = http.createServer(
    (_, response) => {
        console.log('Request received');
        response.end('Lero lero');
    }
);

const port = 5000
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});