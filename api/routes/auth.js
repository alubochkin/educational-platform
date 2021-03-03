const express = require('express');
const passport = require('passport');
const {
  getSignin, getSignup, postSignin, postSignup, signOut,
} = require('../controllers/auth.js');

const router = express.Router();

router
  .route('/signup')
  .get(getSignup)
  .post(passport.authenticate('local'), postSignup);

router
  .route('/signin')
  .get(getSignin)
  .post(passport.authenticate('local'), postSignin);

router.get('/signout', signOut);

module.exports = router;
