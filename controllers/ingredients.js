
const Ingredient = require("../models/ingredient");
const Recipe = require("../models/recipe");

module.exports = {
    create,
    index,
    delete: deleteOne
}

function deleteOne(req, res) {
    Ingredient.findByIdAndDelete(
        {"ingredients._id": req.params.id}, function(err) {
            res.redirect(`/recipes/${req.params.id}`);
        }
    )
}
function index(req, res) {
    Ingredient.find({}, function(err, ingredients) {
        console.log(ingredients);
        res.render("ingredients/index", {ingredients});

    });
}
function create(req, res) {
    Ingredient.create(req.body, function(err, ingredient) {
        console.log(err);
        Recipe.findById(req.params.id, function(err, recipe) {
            recipe.ingredients.push(ingredient._id)
            recipe.save(function(err) {
                if (err) console.log(err);
                res.redirect(`/recipes/${req.params.id}`)
            })
        })
    })
    
};


