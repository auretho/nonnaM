const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const sendMail = require('../mail');


router.post('/sendOrder', (req, res) => {
  console.log(req.body);
    const { id, email, text, firstname, lastname, phone, products, total } = req.body;    
    sendMail(id, email, text, firstname, lastname, phone, products, total, (err) => {
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

module.exports = router;