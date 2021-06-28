const Recipe = require("../models/recipe");

module.exports = {
    index,
    show,
    create
};


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