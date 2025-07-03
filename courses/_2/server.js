const http = require('http');

const server = http.createServer()

server.on('request', (request, response) => {
    if(request.url === "/") {
        response.end("lero lero")
    } else {
        response.end(request.url.slice(1))
    }
})

server.listen(5000)