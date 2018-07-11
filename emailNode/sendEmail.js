var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gracenikole@gmail.com',
        pass: 'Joli3brooke'
    }
});

var mailOptions = {
    from: 'gracenikole@gmail.com',
    to: 'kreepie@hotmail.com',
    subject: 'Ola bb',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, (err, info) => {
    err ? console.log(err): console.log('Email send: ' + info.response);
});