require('dotenv'). config({ path: '/Applications/MAMP/htdocs/Perso/nonna/.env' })
const express = require('express');
const sendMail = require('./mail');
// const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = 3001;

app.use(cors({ origin: "*" }));
app.use(express.json()); // A VOIR LE FONCTIONNEMENT

app.post('/sendOrder', (req, res) => {
    const { id, email, subject, text, firstname, lastname, products } = req.body;
    console.log(req.body);

    sendMail(id, email, subject, text, firstname, lastname, products, (err) => {
        console.log('la fonction sendMail fonctionne');
        if (err) {
            return res.status(500).json({ message: err.message || 'Erreur interne' });
        }
        return res.json({ message: 'Email envoyé!' });
    });
});

app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`))