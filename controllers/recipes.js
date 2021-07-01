const Recipe = require("../models/recipe");
const Ingredient = require("../models/ingredient");

module.exports = {
    index,
    show,
    create,
    delete: deleteRecipe,
    edit,
    update,
};

function update(req, res) {
    Recipe.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true},
        function(err, recipe) {
            res.redirect(`/recipes/${recipe._id}`);
        }
    )
}
    

function edit(req, res) {
    Recipe.findOne({_id: req.params.id}, function(err, recipe) {
        console.log(err);
        res.render("recipes/edit", {recipe});
    })
}

function deleteRecipe(req, res) {
    Recipe.findByIdAndDelete(
        {_id: req.params.id, user: req.user._id}, function(err, recipe) {
            Ingredient.deleteMany({_id: recipe.ingredients}, function(err) {
                res.redirect("/recipes/index");
            });
        }
    )
}


function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const recipe = new Recipe(req.body);
    recipe.save(function(err) {
        if (err) return res.redirect("/home");
        res.redirect("/recipes/index")
    })
}

function show(req, res) {
    Recipe.findById(req.params.id)
    .populate("ingredients")
    .exec(function(err, recipe) {

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