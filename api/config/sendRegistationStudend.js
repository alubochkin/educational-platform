/* eslint-disable no-unused-vars */
const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
const htmlMail = require('../config/mailHtml');
dotenv.config();

module.exports = (email, token) => {
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
    return smtpTransport.sendMail(options, function (error, response) {
      if (error) { console.log(error); return 0; }
      else {
        console.log("Message sent: Сообщения отправленны");
        return 1;
      }
    });
  } else return 0;
};
