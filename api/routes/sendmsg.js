const express = require('express');
const { jwtSend, jwtReceive } = require('../controllers/jwtSent');

const router = express.Router();

router
  .route('/')
  .get(jwtReceive)
  .post(jwtSend);

module.exports = router;
