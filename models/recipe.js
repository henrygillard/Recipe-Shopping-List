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
    directions: {
        type: String,
        default: "None",
    },
        
    user: {
        type: Schema.Types.ObjectId,
        ref: "User" 
    },
    timeToMake: {
        type: Number,
        default: 5
    },
    userName: String,
    userAvatar: String
});


module.exports = mongoose.model("Recipe", recipeSchema);