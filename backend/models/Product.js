const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    image: { type: String, required: false },
    shortName: { type:String, required: false },
    name: { type:String, required: false },
    quantity: { type:Number, required: false },
    description: { type:String, required: false },
    price: { type:Number, required: false },
});

module.exports = mongoose.model('Product', ProductSchema)