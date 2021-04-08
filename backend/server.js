require('dotenv'). config({ path: '/Applications/MAMP/htdocs/Perso/nonna/.env' })
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const multer = require('./mdlw/multer-config');
const fs = require('fs');
const path = require('path');
const sendMail = require('./mail');
const Order = require('./models/Order');
const Product = require('./models/Product');
const PORT = 3001;

app.use(cors({ origin: "*" }));
app.use(express.json()); // A VOIR LE FONCTIONNEMENT
app.use('/images', express.static(path.join(__dirname,'images')));


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

  app.post('/addNewProduct', multer, (req, res) => {
    console.log(req.file);
    const product = new Product({
      ...req.body,
      image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    product.save()
      .then(() => res.status(201).json({ message: 'Nouveau produit ajouté!'}))
      .catch(error => res.status(400).json({ message: 'I y a eu une erreur!', error}));
  });
  
  app.put('/updateProduct/:id', multer, (req, res) => {
    Product.findOne({ _id: req.params.id })
    .then(element => {
      const filename = element.image.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Product.deleteOne({ _id: req.params.id })
        const prodObject = req.file ? 
        { ...req.body,
          image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`} 
        : 
        { ...req.body};
        Product.updateOne({ _id: req.params.id }, { ...prodObject, _id: req.params.id })
        .then(() => res.status(200).json({message: 'objet modifié!'}))
        .catch(error => res.status(400).json({ error }));
      })
    })
  });

  app.delete('/deleteProduct/:id', (req, res) => {
    Product.findOne({ _id: req.params.id })
    .then(element => {
      const filename = element.image.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Product.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({message: "objet supprimé!"}))
        .catch(error => res.status(400).json({ error }));
      })
    })
    .catch(error => res.status(500).json({ error }));
  });

  app.post('/sendOrder', (req, res) => {
    const { id, email, text, firstname, lastname, phone, products, delivery, total } = req.body;    
    console.log(req.body);
    sendMail(id, email, text, firstname, lastname, phone, products, delivery, total, (err) => {
      if (err) {
          return res.status(500).json({ message: err.message || 'Erreur interne' });
      }
      return res.json({ message: 'Email envoyé!' });
    });
    // const order = new Order({
    //   ...req.body
    // });
    // order.save()
    //   .then(() => res.status(201).json({ message: 'Commande enregistrée !'}))
    //   .catch(error => res.status(400).json({ message: 'I y a eu une erreur!', error}));
  });



app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`))