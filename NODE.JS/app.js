// exercise 1

//const crypto = require('crypto');

// console.log("curves", crypto.getCurves()); // Kullanılabilecek eğrileri listeleyin
// console.log("hashes", crypto.getHashes()); // Kullanılabilecek hash fonksiyonlarını listeleyin
// console.log("ciphers",crypto.getCiphers());

// const randomId = crypto.checkPrime(2);
// console.log(randomId);



//exercise 2
// const hi = require('./module.js');

// hi()


// //exercise 3
// function hi() {
//     console.log("hello ecma.");
// }

// export default hi;



// //exercise 4

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><body><h1>hello html</h1></body></html>');
});

const port = 3000;
server.listen(port, () => {
    console.log(`server running ${port} port`);
});