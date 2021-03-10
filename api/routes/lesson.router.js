const express = require('express');
const {
  addLection, getWeekLection, getAllLection, getPhaseLection
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
  .post(getWeekLection);

router
  .route('/getweek')
  .post(getPhaseLection);



module.exports = router;
