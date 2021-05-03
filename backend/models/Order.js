const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    id: { type: String, required: true },
    lastname: { type: String, required: true },
    firstname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    products: { type: Array, required: false}, // A VOIR
    delivery: { type: Boolean, required: false },
    text: {type: String, required: false},
    total: {type: Number, required: false},
});

module.exports = mongoose.model('Order', OrderSchema)