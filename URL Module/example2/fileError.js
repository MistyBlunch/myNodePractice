var hhtp = require('http');
var url = require('url');
var fs = require('fs');

hhtp.createServer((req,res) => {
    var q = url.parse(req.url, true);
    var filename = '.' + q.pathname;
    fs.readFile(filename, (err, data) => {
        if(err) {
            res.writeHead(400, {'ContentType': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'ContentType':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);