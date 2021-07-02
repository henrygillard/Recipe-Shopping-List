
const Ingredient = require("../models/ingredient");
const Recipe = require("../models/recipe");

module.exports = {
    create,
    index,
}

async function index(req, res) {
    const recipes = await Recipe.find({user: req.user._id});
    const ingredients = recipes.reduce((ingredients, recipe) => [...ingredients, ...recipe.ingredients], []);
    Ingredient.find({_id: ingredients}, function(err, ingredients) {
        console.log(ingredients);
        res.render("ingredients/index", {ingredients});

    });
};

function create(req, res) {
    Ingredient.create(req.body, function(err, ingredient) {
        Recipe.findById(req.params.id, function(err, recipe) {
            recipe.ingredients.push(ingredient._id)
            recipe.save(function(err) {
                if (err) console.log(err);
                res.redirect(`/recipes/${req.params.id}`)
            })
        })
    })
    
};


