const multer = require('multer');

const storage = multer.diskStorage({
    // dans quel dossier enregistrer le fichier 
    destination: (req, file, cb) => {
        cb(null, 'images') // nom du dossier créé pour recevoir les images en 2e argument
    },
    // quel nom de fichier utiliser
    filename: (req, file, cb) => {
        // il peut parfois y avoir des espaces autorisés dans les noms de fichier qu'il faut éliminer
        const name = file.originalname.split(' ').join('_'); 
        cb(null, Date.now() + '_' + name);

    }
})

module.exports = multer({storage}).single('image');