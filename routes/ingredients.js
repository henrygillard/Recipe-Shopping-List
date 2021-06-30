const express = require('express');
const router = express.Router();
const ingredientsCtrl = require("../controllers/ingredients");
const isLoggedIn = require("../config/auth");

router.get("/ingredients/index", ingredientsCtrl.index)
router.post("/recipes/:id", isLoggedIn, ingredientsCtrl.create);
router.delete("/ingredients/:id", isLoggedIn, ingredientsCtrl.delete);


module.exports = router;
