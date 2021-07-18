const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    text: { type: String, required: true },
    recipe: { type: String, required: true },
});

module.exports = mongoose.model('Recipe', RecipeSchema)