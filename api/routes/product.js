const express = require('express');
// const authMiddleware = require('../middlewares/auth');
const {
  getAddForm, setAddCard, getFormBuy, addCardUser,
} = require('../controllers/card');

const router = express.Router();
router
  .route('/add')
  .get(getAddForm)
  .post(setAddCard);

router
  .route('/:id')
  .get(getFormBuy)
  .post(addCardUser);

module.exports = router;
