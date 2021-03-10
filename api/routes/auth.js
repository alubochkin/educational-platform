const express = require('express');
const passport = require('passport');
const isEmail = require('../middlewares/checkEmailUser');

const {
  postSignin, signOut, authSignup
} = require('../controllers/auth.js');

const router = express.Router();

router
  .route('/signup')
  .post(isEmail, passport.authenticate('local'), authSignup);

router
  .route('/signin')
  .post(passport.authenticate('local'), postSignin);

router.get('/signout', signOut);

module.exports = router;
