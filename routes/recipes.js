const express = require('express');
const router = express.Router();
const passport = require('passport');
const recipesCtrl = require("../controllers/recipes");
const isLoggedIn = require("../config/auth");


router.delete("/recipes/:id", recipesCtrl);
