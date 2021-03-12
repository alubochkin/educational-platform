const express = require('express');
const { addNewNotes, getNotes, delNotes, updateNotes } = require('../controllers/notes.controller')
const router = express.Router();

router.route('/')
  .post(getNotes);

router.route('/add')
  .post(addNewNotes);

router.route('/update')
  .post(updateNotes);

router.route('/:id')
  .get(delNotes);

module.exports = router;
