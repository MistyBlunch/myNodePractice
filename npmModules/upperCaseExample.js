var http = require('http');
var uc = require('upper-case');

http.createServer((req, res) => {
    res.writeHead(200, {'contentType': 'text/html'});
    res.write(uc('Holi Misty Blunch!'));
    res.end();
    }).listen(8080);
