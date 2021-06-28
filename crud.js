require('./config/database')
const Recipe = require('./models/recipe');
const User = require("./models/user");

let u, r;

Recipe.findOne({}, function(err, recipe) {
    r = recipe
})

User.findOne({}, function(err, user) {
    u = user;
})