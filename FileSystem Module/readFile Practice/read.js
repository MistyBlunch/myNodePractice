var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
    //Open a file on the server and return it's content:
    fs.readFile('file.html', (err, data)=> {
        res.writeHead(200, {'ContentType': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);