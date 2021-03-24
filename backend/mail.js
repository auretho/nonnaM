const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN, 
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, firstname, lastname, cb) => {
    const mailOptions = {
        from: 'emmalieforever@hotmail.com', // TODO replace this with your own email
        to: 'aurelie.thouzeau@gmail.com', // TODO: the receiver email has to be authorized for the free tier
        
        subject: 'salut la mif',
        text: {
            lastname: "Nom de famille",
            firstname: "Prénom",
        }
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;