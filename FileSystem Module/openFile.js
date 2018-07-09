var fs = require('fs');

fs.open('mynewFile2.html', 'w', (err, file) => {
    if(err) throw err;
    console.log('Saved!')
})