const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('../mdlw/multer-config');
const auth = require('../mdlw/auth');
const Photo = require('../models/Photo');


router.post('/addNewPhoto', auth, multer, (req, res) => {
  const photo = new Photo({
  ...req.body,
  image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
});

  photo.save()
  .then(() => res.status(201).json({ message: 'Nouvelle photo + texte ajoutés!'}))
  .catch(error => res.status(400).json({ message: 'Il y a eu une erreur!', error}));
});

router.get('/findAllPhotos', (req, res) => {
    Photo.find()
    .then(photo => res.status(200).json(photo))
    .catch(error => res.status(400).json({ error }));
  });


router.put('/updatePhoto', auth, multer,(req,res) => {
  if(req.file && req.file != req.body.image){
    return Photo.findOne({ _id: req.body.num })
    .then(element => {
      const filename = element.image.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
          Photo.deleteOne({ _id: req.body.num })
            const photoObject = req.file ? 
            { ...req.body,
            image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`} 
            : 
            { ...req.body};
          Photo.updateOne({ _id: req.body.num }, { ...photoObject, _id: req.body.num })
          .then(() => res.status(200).json({message: 'objet modifié!'}))
          .catch(error => res.status(400).json({ error }));
      })
    })
    .catch(error => res.status(400).json({error}));
  }
  Photo.updateOne({ _id: req.body.num }, { ...req.body, _id: req.body.num })
  .then(() => res.status(200).json({message: 'objet modifié!'}))
  .catch(error => res.status(400).json({ error }));
})

module.exports = router;