const http = require('http');

const server = http.createServer((request, response) => {
    if(request.url === "/") {
        response.end("<body><h1>Homer page:</h1><img width=300 src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F9%2F2%2F9%2F1266532-widescreen-homer-simpson-wallpaper-hd-1892x2706.jpg&f=1&nofb=1&ipt=7a22d441ee8483a2f0934bb6d35d030e200e3e1a595cf6c0be11cdfcde917589'></img></body>");
    } else if(request.url === "/about") {
        for(let y = 0; y < 1000; y++) {
            for(let x = 0; x < 1000; x++) {
                console.log(`(${x}, ${y})`);
            }
        }
        response.end('About Page');
    } else {
        response.end('Lero lero');
    }
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});