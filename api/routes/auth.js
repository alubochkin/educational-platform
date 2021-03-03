const express = require('express');
const passport = require('passport');

const {
  postSignin, studentSignup, teacherSignup, signOut,
} = require('../controllers/auth.js');

const router = express.Router();

router
  .route('/student/signup')
  .post(passport.authenticate('local'), studentSignup);

router
  .route('/teacher/signup')
  .post(passport.authenticate('local'), teacherSignup);
//   ,



router
  .route('/signin')
  .post(passport.authenticate('local'), postSignin);

router.get('/signout', signOut);

module.exports = router;
