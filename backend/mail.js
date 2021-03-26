const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN,
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (id, email, subject, text, firstname, lastname, cb) => {
    const mailOptions = {
        from: email, // TODO replace this with your own email
        to: 'aurelie.thouzeau@gmail.com', // TODO: the receiver email has to be authorized for the free tier
        subject: `${subject} ${id}`,
        text: `NOM: ${firstname} ${lastname} 
        \nMESSAGE: ${text} 
        \nID: ${id}`,
        
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('il y a eu une erreur');
            return cb(err, null);
        }
        console.log('message envoyé!!');
        return cb(null, data);
    });
}

module.exports = sendMail;