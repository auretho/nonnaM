require('dotenv'). config({ path: '/Applications/MAMP/htdocs/Perso/nonna/.env' })
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path');
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');

const PORT = 3001;

app.use(cors({ origin: "*" }));
app.use(express.json()); // A VOIR LE FONCTIONNEMENT
app.use('/images', express.static(path.join(__dirname,'images')));


mongoose.connect(process.env.CONNECT,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use('/backoffice/user', userRoute);
app.use('/backoffice/products', productRoute);
app.use('/backoffice/order', orderRoute);


app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`))