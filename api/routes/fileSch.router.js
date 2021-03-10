const express = require('express');
const multer = require('multer');
const path = require('path');
const StorFile = require('../models/storFileInfo');
const fs = require('fs')
const { promisify } = require('util');

const unlinkAsync = promisify(fs.unlink)

const dirname = path.resolve();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    if (file.originalname.match(/\.(js).*$/gmi))
      return cb(new Error('This is not a correct format of the file'))
    let originalname = file.originalname;
    let extension = originalname.split(".");
    let filename = Date.now() + '.' + extension[extension.length - 1];
    cb(null, filename);
  }
});

const upload = multer({
  storage: storage, dest: path.join(dirname, 'uploads')
});
// limits: { fieldSize: 10000000000 }
const router = express.Router();

router
  .route('/file')
  .post(upload.single('filedata'), async (req, res) => {
    const { userId, schId } = req.body;
    // const schId = '6045d5db99d5b122df807fcf';
    try {
      const storFile = await StorFile.create({
        fieldname: req.file.fieldname,
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        destination: req.file.destination,
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size,
        userId: userId,
        schId: schId
      });
      res.json({ id: storFile._id });
    }
    catch {
      res.json({ err: 'Error add file DB' });
    }
  });

router
  .route('/fileremove')
  .post(async (req, res) => {
    try {
      const fileId = req.body.fileId;
      await unlinkAsync(req.file.path)
      const storFile = await StorFile.findById(fileId);
      storFile.remove();

      res.json({ id: storFile._id });
    }
    catch {
      res.json({ err: 'Error remove file DB' });
    }
    res.json({ err: 'Error remove file DB' });
  });

router
  .route('/fileget/:id')
  .post(async (req, res) => {
    try {
      const fileId = req.body.fileId;
      await unlinkAsync(req.file.path)
      const storFile = await StorFile.findById(fileId);
      storFile.remove();

      res.json({ id: storFile._id });
    }
    catch {
      res.json({ err: 'Error remove file DB' });
    }
    res.json({ err: 'Error remove file DB' });
  });

// получение файла опр урока
router
  .route('/filesch')
  .post(async (req, res) => {
    try {
      const { schId } = req.body;
      // await unlinkAsync(req.file.path);
      const storFile = await StorFile.find({ schId: schId });
      if (storFile.length !== 0) {
        res.json(storFile);
      } else {
        res.status(200);
      }
    }
    catch {
      res.json({ message: 'File not found' });
    }
  });


module.exports = router;
