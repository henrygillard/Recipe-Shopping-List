const Recipe = require("../models/recipe");

module.exports = {
    index,
    show,
    create,
    delete: deleteRecipe,
};

function deleteRecipe(req, res) {
    Recipe.findOneAndDelete(
        {_id: req.params.id, user: req.user._id}, function (err) {
            res.redirect(`/recipes/index`);
        
        }
    )
}


function create(req, res) {
    const recipe = new Recipe(req.body);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
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