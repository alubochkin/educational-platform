const express = require('express');
const {
  addLection, getWeekLection, getAllLection, getPhaseLection, getItemLection
} = require('../controllers/lesson.controller');
const router = express.Router();

router
  .route('/add')
  .post(addLection);

router
  .route('/getall')
  .post(getAllLection);

router
  .route('/getphase')
  .post(getPhaseLection);

router
  .route('/getweek')
  .post(getWeekLection);

router
  .route('/getitem')
  .post(getItemLection);


module.exports = router;
