const express = require('express');
const router = express.Router();
const ingredientsCtrl = require("../controllers/ingredients");
const isLoggedIn = require("../config/auth");

router.post("/recipes/:id/ingredients", ingredientsCtrl.create);
