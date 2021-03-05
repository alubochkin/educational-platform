const nodemailer = require('nodemailer')
const express = require('express');
const dotenv = require('dotenv');
const htmlMail = require('../config/mailHtml')
dotenv.config();

const router = express.Router();

router.get('/', async (req, res) => {


  let smtpTransport = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'elbrusteacher@bk.ru',
      pass: '-omP3erxXUA1',
    },
  })

  const options = {
    from: '"Буткемп" <elbrusteacher@bk.ru>',
    to: '<alubochkin@yandex.ru>, <maro_80@bk.ru',
    subject: 'Привет это письмо от Буткемп',
    html: htmlMail(),
  }

  smtpTransport.sendMail(options, function(error, response) {
    if (error){
            console.log(error);
            res.end("error");
    } else{
            console.log("Message sent: " + response.message);
            res.end("sent");
      }
    })

});

module.exports = router;


