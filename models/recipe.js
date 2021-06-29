const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: "Ingredient"
    }],
    directions: [],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User" 
    },
    userName: String,
    userAvatar: String
});


module.exports = mongoose.model("Recipe", recipeSchema);