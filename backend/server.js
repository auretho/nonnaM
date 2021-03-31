require('dotenv'). config({ path: '/Applications/MAMP/htdocs/Perso/nonna/.env' })
const express = require('express');
const sendMail = require('./mail');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Order = require('./models/Order');

const PORT = 3001;

app.use(cors({ origin: "*" }));
app.use(express.json()); // A VOIR LE FONCTIONNEMENT


mongoose.connect(process.env.CONNECT,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


  app.post('/sendOrder', (req, res) => {
      console.log(req.body)
    const order = new Order({
      ...req.body
    });
    order.save()
      .then(() => res.status(201).json({ message: 'Commande enregistrée !'}))
      .catch(error => res.status(400).json({ message: 'I y a eu une erreur!', error}));
  });




// app.post('/sendOrder', (req, res) => {
//     const { id, email, text, firstname, lastname, phone, products, total } = req.body;
//     console.log(req.body);

//     sendMail(id, email, text, firstname, lastname, phone, products, total, (err) => {
//         if (err) {
//             return res.status(500).json({ message: err.message || 'Erreur interne' });
//         }
//         return res.json({ message: 'Email envoyé!' });
//     });
// });

app.post('/addProduct')

app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`))