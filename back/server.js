require('dotenv').config({ path: '/Applications/MAMP/htdocs/Perso/nonna/.env'});

const cors = require('cors');
const express = require('express');
const sendMail = require('./mail');
const app = express();
// const path = require('path');

const PORT = 3001;

// app.use(express.urlencoded({
//     extended: false
// }));

app.use(express.json());

// app.post('/email', (req,res) => {
//     console.log('voici un test');
//     const { email, subject, text } = req.body;
//     console.log('Data:', req.body);

//     sendMail(email, subject, text, (err, data) => {
//         if(err) {
//             res.status(500).json({ message: 'Il y a une erreur interne'});
//         } else{
//             res.json({ message: 'Email envoyé'})
//         }
//     });
// })

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, '../src', 'components', 'Orders', 'index.js'))     
// })

app.listen(PORT, () => console.log(`Le server fonctionne sur le port ${PORT}`));