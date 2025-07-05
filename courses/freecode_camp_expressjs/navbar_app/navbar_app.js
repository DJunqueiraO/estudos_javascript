const http = require('http')
const fs = require('fs')

// get all files
const homePage = fs.readFileSync('./courses/freecode_camp_expressjs/navbar_app/index.html')
const homeStyles = fs.readFileSync('./courses/freecode_camp_expressjs/navbar_app/styles.css')
const homeImage = fs.readFileSync('./courses/freecode_camp_expressjs/navbar_app/logo.svg')
const homeScripts = fs.readFileSync('./courses/freecode_camp_expressjs/navbar_app/browser_app.js')

const server = http.createServer((request, response) => {
    const url = request.url
    if (url === '/') {
        response.writeHead(200, {'content-type': 'text/html'})
        response.write(homePage)
    } else if (url === '/about') {
        response.writeHead(200, {'content-type': 'text/html'})
        response.write('<h1>About Page</h1>')
    } else if (url === '/styles.css') {
        response.writeHead(200, {'content-type': 'text/css'})
        response.write(homeStyles)
    } else if (url === '/logo.svg') {
        response.writeHead(200, {'content-type': 'image/svg+xml'})
        response.write(homeImage)
    } else if (url === '/browser_app.js') {
        response.writeHead(200, {'content-type': 'text/javascript'})
        response.write(homeScripts)
    } else {
        response.writeHead(404, {'content-type': 'text/html'})
        response.write('<h1>404 Not Found</h1>')
    }
    response.end()
})

// remenber 5000 is arbitrary, you can use any port that is not in use
// but in production you should use a port above 1024
// and below 65535, and you should not use port 80 or 443
// because those are reserved for http and https
server.listen(5000)