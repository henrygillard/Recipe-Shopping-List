require('dotenv').config();
require('./config/database')
const Recipe = require('./models/recipe');
const Ingredient = require('./models/ingredient');
const User = require("./models/user");



Recipe.find({}, function(err, recipes) {
    console.log(recipes)
    
})



User.find({}, function(err, users) {
    console.log(users);
})