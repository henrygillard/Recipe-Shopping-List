const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    ingredient: {
        type: String,
        
    },
    quantity: {
        type: Number,
        min: 1
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String

});

module.exports = mongoose.model("Ingredient", ingredientSchema)