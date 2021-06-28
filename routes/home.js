const express = require('express');
const router = express.Router();
const passport = require('passport');
const recipesCtrl = require("../controllers/recipes");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

// CREATE a recipe

router.get("/recipes/index", recipesCtrl.index);

router.get("/recipes/:id", recipesCtrl.show);

router.post("/recipes/index", recipesCtrl.create);


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



module.exports = router;
