/* eslint-disable no-unused-vars */
const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
const htmlMail = require('../config/mailHtml');
dotenv.config();

module.exports = (email, token) => {
  let smtpTransport = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'bootcampedu',
      pass: 'bootcamp12345678@',
    },
  });
  const options = {
    from: `"Буткемп" <bootcampedu@yandex.ru>`,
    to: `<${email}>`,
    subject: 'Привет это письмо от Буткемп',
    html: htmlMail(token),
  }
  if (email) {
    return smtpTransport.sendMail(options, function (error, response) {
      if (error) { console.log(error); return 'Err 0'; }
      else {
        console.log("Message sent: Сообщения отправленны");
        return 1;
      }
    });
  } else return 0;
};
