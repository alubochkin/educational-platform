const express = require('express');
const passport = require('passport');
const {
  postSignin, postSignup, signOut,
} = require('../controllers/auth.js');

const router = express.Router();

// router
//   .route('/student/signup')
//   .post(passport.authenticate('local'), postSignup);

router
  .route('/signup')
  .post(passport.authenticate('local'), postSignup);


router
  .route('/signin')
  .post(passport.authenticate('local'), postSignin);

router.get('/signout', signOut);

module.exports = router;
