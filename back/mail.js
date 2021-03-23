const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, callback) => {
    const mailOptions = {
        from: email, // TODO replace this with your own email
        to: 'aurelie.thouzeau@gmail.com', // TODO: the receiver email has to be authorized for the free tier
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return callback(err, null);
        }else {
        }
        return callback(null, data);
    });
}

module.exports = sendMail;