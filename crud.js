require('dotenv').config();
require('./config/database')
const Recipes = require('./models/recipe');
const Users = require("./models/user");



Recipes.find({}, function(err, recipes) {
    console.log(recipes)
})

