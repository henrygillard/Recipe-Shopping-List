const Recipe = require("../models/recipe");

module.exports = {
    create,
    new: newIngredient
}

function newIngredient(req, res) {
    res.render("ingredients/new");
}
function create(req, res) {
    Recipe.findById(req.parmas.id, function(err, recipe) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        Recipe.ingredients.push(req.body);
        recipe.save(function(err) {
            res.redirect(`/recipes/${req.params.id}`);

    })

    })
};


