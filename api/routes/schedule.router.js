const express = require('express');
const {
  addSchedule, delSchedule, updateSchedule, getScheduleId, getScheduleAll, getScheduleFile
} = require('../controllers/module.controller.js');

const router = express.Router();

router
  .route('/add')
  .post(addSchedule);

router
  .route('/update')
  .post(delSchedule);

router
  .route('/delete')
  .delete(updateSchedule);

router
  .route('/:id')
  .get(getScheduleId);

router
  .route('/all')
  .post(getScheduleAll);

router
  .route('/file')
  .post(getScheduleFile);

module.exports = router;
