var fs = require('fs');

fs.rename('mynewFile2.html', 'newFile2.html', (err) => {
    if(err) throw err;
    console.log('File renamed!');
})