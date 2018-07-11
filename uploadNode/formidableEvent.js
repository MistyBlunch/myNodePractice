var http = require('https');
var formidable = require('formidable');
var fs = require('fs');


http.createServer((req, res)  =>{
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/Users/grace/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, (err) => {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
            });
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