const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN,
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (id, email, text, firstname, lastname, phone, products, total, cb) => {
    const shortId = id.substring(0, 8);
    const productsOrdered = products.map(product => product.map(element => {
        if(element.count != ""){
            return `<div>
                <b>Produit:</b> ${element.name}
                <br>
                <b>Quantité:</b> ${element.count}
            </div>`
            }
    }).join('')).join('');

    const mailOptions = {
        from: email,
        to: 'aurelie.thouzeau@gmail.com', 
        subject: `Commande n° ${shortId}`,
        html:`<p><b>FULL ID:</b> ${id}</p> 
        <p><b>NOM:</b> ${firstname} ${lastname} </p>
        <p><b>EMAIL:</b> ${email}</p>
        <p><b>TELEPHONE:</b> ${phone}</p>
        <p><b>MESSAGE:</b> ${text}</p> 
        <p><b>PRODUITS:</b>${productsOrdered}</p>
        <p><b>TOTAL TTC:</b> ${total.toFixed(2)}€</p>`,
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('il y a eu une erreur');
            return cb(err, null);
        }
        console.log('message envoyé!');
        return cb(null, data);
    });
}

module.exports = sendMail;