const express = require('express');
const multer = require('multer');
const User = require('../models/User');
const router = express.Router();

const avatar = multer({
  limits: {
    fileSize: 100000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|JPG|PNG|JPEG|jpeg)$/))
      return cb(new Error('This is not a correct format of the file'))
    cb(null, true)
  }
})

router.post('/avatar', avatar.single('avatar'), async (req, res) => {
  const { userId } = req.body;
  console.log('@@@', req.bod);
  console.log('*******', req.file)
  if (req.file.buffer) {
    const user = await User.findByIdAndUpdate({ _id: userId }, { $set: { avatar: req.file.buffer } })
    res.json({ id: user.id, avatar: user.avatar })
  }
}, (err, req, res, next) => res.status(404).json({ error: err }));

router.get('/avatar/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user || !user.avatar)
      res.status(404).json(new Error())

    res.json(user.avatar)
  } catch (e) {
    res.status(404).json(new Error())
  }

});

module.exports = router;
