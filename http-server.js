
let http = require('http');
let fs = require('fs');


fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } 
    console.log('the file is aved');
});

http.createServer((req, res) => { 
    res.end('request handled');
}).listen((3000), () => {
    console.log('server running on port 3000')
});




