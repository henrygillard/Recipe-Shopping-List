const Ingredient = require("../models/ingredient")

module.exports = {
    create
}

function create(req, res) {
    Ingredient.create(req.body, function(err, ingredient) {
        res.redirect(`/recipes/${req.params.id}`);
    });
}

