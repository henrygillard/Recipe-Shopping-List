const express = require('express');
const router = express.Router();
const passport = require('passport');
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











module.exports = router;
