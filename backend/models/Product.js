const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    image: { type:String, required: true },
    shortName: { type:String, required: true },
    name: { type:String, required: true },
    description: { type:String, required: true },
    price: { type:Number, required: true },

});

module.exports = mongoose.model('Product', ProductSchema)