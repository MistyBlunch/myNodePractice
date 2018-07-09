var fs = require('fs');

fs.writeFile('mynewFile3.html', 'Hello Amikitos!', (err) => {
    if(err)  throw err;
    console.log('Saved!');
    // or console.log('Replaced');
})