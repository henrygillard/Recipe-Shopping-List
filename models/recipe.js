const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const IngredientSchema = new Schema({
    ingredient: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        min: 1
    }
});

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: [IngredientSchema],
    directions: [],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User" 
    },
    userName: String,
    userAvatar: String
});


module.exports = mongoose.model("Recipe", recipeSchema);