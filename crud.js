require('./config/database')
const Recipe = require('./models/recipe');
const User = require("./models/user");

let u, r;

Recipe.find({}, function(err, recipes) {
    console.log(recipes.name)
})

