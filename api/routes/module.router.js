const express = require('express');

const {
  addModule, delModule, updateModule, getModuleId, getModuleAll, getModuleStudent, getModuleTeacher
} = require('../controllers/module.controller.js');

const router = express.Router();

router
  .route('/add')
  .post(addModule);

router
  .route('/update')
  .post(updateModule);

router
  .route('/delete')
  .delete(delModule);

router
  .route('/:id')
  .get(getModuleId);

router
  .route('/admin')
  .post(getModuleAll);

router
  .route('/student')
  .post(getModuleStudent);


router
  .route('/teacher')
  .post(getModuleTeacher);


module.exports = router;
