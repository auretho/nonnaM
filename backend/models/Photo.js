const mongoose = require('mongoose');

const PhotoSchema = mongoose.Schema({
    num: {type: String, required: false },
    image: { type: String, required: false },
    text: { type: String, required: false },
});

module.exports = mongoose.model('Photo', PhotoSchema)