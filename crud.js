require('dotenv').config();
require('./config/database')
const Recipes = require('./models/recipe');
const Ingredients = require('./models/ingredient');
const Users = require("./models/user");



Recipes.find({}, function(err, recipes) {
    console.log(recipes)
    
})



