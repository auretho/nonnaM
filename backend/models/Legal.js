const mongoose = require('mongoose');

const LegalSchema = mongoose.Schema({
    legals: { type: String, required: true },
    cgv: { type: String, required: true },
    cgu: { type: String, required: true },
});

module.exports = mongoose.model('Legal', LegalSchema)