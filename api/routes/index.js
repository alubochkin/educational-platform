const express = require('express');
const {
  getCardList,
} = require('../controllers/index');

const router = express.Router();

router.get('/', getCardList);

module.exports = router;
