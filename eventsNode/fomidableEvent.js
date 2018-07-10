var http = require('https');
var formidable = require('formidable');

http.createServer((req, res) => {
    if(req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            res.write('File uploaded');
            res.end();
        });
    } else {
    res.writeHead(200, {'ContentType': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
    }
}).listen(8080);