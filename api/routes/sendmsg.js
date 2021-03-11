const express = require('express');
const { jwtSend, jwtReceive } = require('../controllers/jwtSent');
const isEmail = require('../middlewares/checkEmailUser');

const router = express.Router();

router
  .route('/')
  .post(jwtSend);

router
  .route('/token')
  .post(jwtReceive);

module.exports = router;
