const Recipe = require("../models/recipe");

module.exports = {
    index,
    show,
    create,
    delete: deleteRecipe,
};

function deleteRecipe(req, res) {
    const recipe = Recipe.id(req.params.id);
    recipe.remove();
    recipe.save();
    res.redirect(`recipes/${recipe._id}`);
}


function create(req, res) {
    const recipe = new Recipe(req.body);
    recipe.save(function(err) {
        if (err) return res.redirect("/home");
        res.redirect("/recipes/index")
    })
}

function show(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        res.render("recipes/show", {
            recipe
        });
    });
}

        


function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render("recipes/index", {title: "All Recipes", recipes});
        
    });
    
}