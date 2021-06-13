require('dotenv').config({ path: '../.env' });
const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');
const app = express();
const path = require('path');
const userRoute = require('./routes/user');
const photoRoute = require('./routes/photo');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');
const recipeRoute = require('./routes/recipe');
const legalRoute = require('./routes/legal');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(express.json());
app.use(express.static('./build'))

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.9fmcl.mongodb.net/${process.env.DB_COLLECTION}?retryWrites=true"`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
mongoose.set(
  'useCreateIndex', true);

app.use('/images', express.static(path.join(__dirname,'images')));


app.use('/backoffice/user', userRoute);
app.use('/backoffice/photo', photoRoute);
app.use('/backoffice/products', productRoute);
app.use('/backoffice/order', orderRoute);
app.use('/backoffice/recipe', recipeRoute);
app.use('/backoffice/legal', legalRoute);

app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, './build/index.html'))
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Le serveur tourne sur le port ${port}`))
