require('dotenv').config();

const nodemailer = require('nodemailer');
// const xoauth2 = require('xoauth2'); 

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
        // clientId: '835439522578-rqju87jrpoe9feidsqvnrq90hjmif88f.apps.googleusercontent.com',
        // clientSecret: 'h-BLCJFUFpIr8hzIlHXl7fv1',
        // refreshtoken: '',  
    }

})

var mailOptions = {
    from: 'Lydiah <muasajohn98@gmail.com>',
    to: 'smakini2003@yahoo.com',
    subject: 'TESTING',
    text: 'HI????',

}

transporter.sendMail(mailOptions, function (err, res) {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('Email has been sent!');
    }

})