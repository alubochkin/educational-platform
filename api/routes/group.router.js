const express = require('express');

const {
  addGroup, delGroup, updateGroup, getGroupId, getGroupAll
} = require('../controllers/group.controller.js');

const router = express.Router();

router
  .route('/add')
  .post(addGroup);

router
  .route('/update')
  .post(updateGroup);

router
  .route('/delete')
  .post(delGroup);

router
  .route('/:id')
  .get(getGroupId);

router
  .route('/')
  .post(getGroupAll);

// router.get('/signout', signOut);

module.exports = router;
