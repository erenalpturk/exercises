const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><body><h1>Hello World, it is node js</h1></body></html>');
});

const port = 3000;
server.listen(port, () => {
    console.log(`server running ${port} port`);
});