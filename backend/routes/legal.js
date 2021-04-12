const express = require('express');
const router = express.Router();
const Legal = require('../models/Legal');
const auth = require('../mdlw/auth');


router.get('/findAllLegals', (req, res) => {
    Legal.find()
    .then(legals => res.status(200).json(legals))
    .catch(error => res.status(400).json({ error }));
  });


router.put('/updateLegals', auth, (req,res) => {
    console.log(req.body);
    Legal.updateOne({ _id: req.body._id }, {...req.body})
    .then(prod => res.status(200).json( prod ))
    .catch(error => res.status(400).json({ error }))
})

module.exports = router;