require('dotenv'). config({ path: '/Applications/MAMP/htdocs/Perso/nonna/.env' })
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const sendMail = require('./mail');
const Order = require('./models/Order');
const Product = require('./models/Product');
const PORT = 3001;

app.use(cors({ origin: "*" }));
app.use(express.json()); // A VOIR LE FONCTIONNEMENT

mongoose.connect(process.env.CONNECT,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


  app.get('/findAllProducts', (req, res) => {
    Product.find()
    .then(products => res.status(200).json(products))
    .catch(error => res.status(400).json({ error }));
  });

  app.get('/findProduct/:id', (req, res) => {
    Product.findOne({ _id: req.params.id })
    .then(products => res.status(200).json(products))
    .catch(error => res.status(404).json({ error }));
  });
  
  app.post('/sendOrder', (req, res) => {
      console.log(req.body)
    const order = new Order({
      ...req.body
    });
    order.save()
      .then(() => res.status(201).json({ message: 'Commande enregistrée !'}))
      .catch(error => res.status(400).json({ message: 'I y a eu une erreur!', error}));
  });

  app.post('/addNewProduct', (req, res) => {
    console.log(req.body)
  const product = new Product({
    ...req.body
  });
  product.save()
    .then(() => res.status(201).json({ message: 'Nouveau produit ajouté!'}))
    .catch(error => res.status(400).json({ message: 'I y a eu une erreur!', error}));
});

  // router.post('/sendOrder', (req, res) => {
  //     const { id, email, text, firstname, lastname, phone, products, total } = req.body;
  //     console.log(req.body);
  
  //     sendMail(id, email, text, firstname, lastname, phone, products, total, (err) => {
  //         if (err) {
  //             return res.status(500).json({ message: err.message || 'Erreur interne' });
  //         }
  //         return res.json({ message: 'Email envoyé!' });
  //     });
  // });

app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`))