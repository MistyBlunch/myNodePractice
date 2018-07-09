var fs = require('fs');

fs.appendFile('mynewFile1.html', '<h1>Holi, es Misty Bluch</h1> <br> <h2>Es mi primera vez en <b style="color:red;">NodeJs</b> y es asombroso! :3</h2>', (err) => {
    if(err) throw err;
    console.log('Saved!!!');
    // or console.log('Updated');
})

// node crateFile.js --> that's creating a new file!