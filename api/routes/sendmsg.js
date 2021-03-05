const express = require('express');
const { jwtSend, jwtReceive } = require('../controllers/jwtSent');

const router = express.Router();

router
  .route('/')
  .post(jwtSend);

router
  .route('/token')
  .post(jwtReceive);

module.exports = router;
