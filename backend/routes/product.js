const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('../mdlw/multer-config');
const Product = require('../models/Product');
const auth = require('../mdlw/auth');


router.get('/findAllProducts', (req, res) => {
    Product.find()
    .then(products => res.status(200).json(products))
    .catch(error => res.status(400).json({ error }));
  });

router.get('/findProduct/:id', auth, (req, res) => {
    Product.findOne({ _id: req.params.id })
    .then(products => res.status(200).json(products))
    .catch(error => res.status(404).json({ error }));
});

router.post('/addNewProduct', auth, multer, (req, res) => {
    const product = new Product({
    ...req.body,
    orderCount: 0,
    image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
});

    product.save()
    .then(() => res.status(201).json({ message: 'Nouveau produit ajouté!'}))
    .catch(error => res.status(400).json({ message: 'I y a eu une erreur!', error}));
});

router.put('/updateStock', auth, (req,res) => {
    Product.updateOne({ _id: req.body._id }, {quantity: req.body.quantity})
    .then(prod => res.status(200).json( prod ))
    .catch(error => res.status(400).json({ error }))
})

router.put('/updateProduct/:id', auth, multer, (req, res) => {
    if(req.file && req.file != req.body.image){
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
    })}
    else {
        Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
            .then(() => res.status(200).json({message: 'objet modifié!'}))
            .catch(error => res.status(400).json({ error }));
    }
});

router.delete('/deleteProduct/:id', auth, (req, res) => {
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


module.exports = router;