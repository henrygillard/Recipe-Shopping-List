const express = require('express');
const router = express.Router();
const passport = require('passport');
const recipesCtrl = require("../controllers/home");
const isLoggedIn = require("../config/auth");


// GET our index route
// router.get("/recipes/index", recipesCtrl.index);

