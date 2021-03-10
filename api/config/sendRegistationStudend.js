/* eslint-disable no-unused-vars */
const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
const htmlMail = require('../config/mailHtml');
dotenv.config();

module.exports = (email, token) => {
  let mass = '';
  let smtpTransport = nodemailer.createTransport({
    host: process.env.MSG_HOST,
    port: process.env.MSG_PORT,
    secure: true,
    auth: {
      user: process.env.MSG_USER,
      pass: process.env.MSG_PASS,
    },
  });
  const options = {
    from: `"Буткемп" <${process.env.MSG_USER}>`,
    to: `<${email}>`,
    subject: 'Привет это письмо от Буткемп',
    html: htmlMail(token),
  }
  if (email) {
    smtpTransport.sendMail(options, function (error, response) {
      if (error) { console.log(error); mass = error; }
      else {
        console.log("Message sent: Сообщения отправленны");
      }
    });
  }
  return mass;
};
