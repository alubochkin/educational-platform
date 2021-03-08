const express = require('express');

const {
  addModule, delModule, updateModule, getModuleId, getModuleAll
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
  .route('/')
  .post(getModuleAll);

// router.get('/signout', signOut);

module.exports = router;
