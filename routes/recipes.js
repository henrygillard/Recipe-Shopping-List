const express = require('express');
const router = express.Router();
const recipesCtrl = require("../controllers/recipes");
const isLoggedIn = require("../config/auth");

// // GET recipes index
router.get("/recipes/index", isLoggedIn, recipesCtrl.index);

// // GET show page 
router.get("/recipes/:id", isLoggedIn, recipesCtrl.show);

// // POST create a recipe
router.post("/recipes/index", isLoggedIn, recipesCtrl.create);

// EDIT a recipe
router.get("/recipes/:id/edit", isLoggedIn, recipesCtrl.edit);

// UPDATE a recipe
router.put("/recipes/:id", isLoggedIn, recipesCtrl.update);

// DELETE a recipe
router.delete("/recipes/:id", isLoggedIn, recipesCtrl.delete);


module.exports = router;
