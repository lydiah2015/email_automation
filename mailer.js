const settings  = require("./settings");

const nodemailer = require("nodemailer");

function Mailer(){
    this.transporter = null;
}

Mailer.prototype.createBasicTransporter=function(opts){
    this.transporter=nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: settings.EMAIL_NAME,
            pass: settings.EMAIL_PASSWORD
        }

    })
    return;
}

Mailer.prototype.sendMail = function(mailObj){
    var mailOptions = {
        from: `${mailObj.from} <${settings.EMAIL_NAME}>`,
        to: mailObj.email,
        subject: mailObj.subject,
        text: mailObj.body,
    
    }
    
    this.transporter.sendMail(mailOptions, function (err, res) {
        if (err) {
            console.log('Error', err);
        } else {
            console.log(`Email has been sent to ${mailObj.email}`);
        }
    
    })
}

module.exports = Mailer;