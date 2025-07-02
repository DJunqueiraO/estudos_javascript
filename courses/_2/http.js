const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end("Welcome to hell!");
    }
    if (request.url === '/about') {
        response.end("lero lero");
    }
    response.end(`
        <h1>Oops!</h1>
        <p>We can't find the page you are looking for.</p>
        <a href="/">back homer simpson</a>
    `);
})

server.listen(5000)