const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');
const auth = require('../mdlw/auth');


router.get('/findAllRecipes', (req, res) => {
  Recipe.find()
    .then(recipes => res.status(200).json(recipes))
    .catch(error => res.status(400).json({ error }));
  });


router.put('/updateRecipes', auth, (req,res) => {
    Recipe.updateMany({ _id: req.body._id }, {...req.body})
    .then(recipe => res.status(200).json( recipe ))
    .catch(error => res.status(400).json({ error }))
})

module.exports = router;