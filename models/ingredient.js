const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    ingredient: {
        type: String,
        required: true
    },
    quantity: {
        type: Number
    }
});

module.exports = mongoose.model("Ingredient", IngredientSchema);