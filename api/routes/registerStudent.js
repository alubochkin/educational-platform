const nodemailer = require('nodemailer')
const express = require('express');
const MailComposer = require("nodemailer/lib/mail-composer");
const dotenv = require('dotenv');
const htmlMail = require('../config/mailHtml')
dotenv.config();

const router = express.Router();

router.get('/', async (req, res) => {


  let smtpTransport = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: `${process.env.user}`,
      pass: `${process.env.pass}`,
    },
  })

  const options = {
    from: '"Node js" <alubochkin@yandex.ru>',
    to: '<alubochkin@yandex.ru>',
    subject: 'Message from Node js',
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


