const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {

  res.status(200).json(req.body)
});

module.exports = router;
