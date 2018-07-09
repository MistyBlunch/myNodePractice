var fs = require('fs');

fs.unlink('mynewFile1.html', (err) => {
    if(err) throw err;
    console.log('File Deleted');
});