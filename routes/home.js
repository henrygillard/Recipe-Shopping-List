const express = require('express');
const router = express.Router();
const passport = require('passport');
const recipesCtrl = require("../controllers/recipes");
const isLoggedIn = require("../config/auth");

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

// GET recipes index
router.get("/recipes/index", recipesCtrl.index);

// GET show page 
router.get("/recipes/:id", recipesCtrl.show);

// POST create a recipe
router.post("/recipes/index", isLoggedIn, recipesCtrl.create);





module.exports = router;
