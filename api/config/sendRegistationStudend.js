/* eslint-disable no-unused-vars */
const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
const htmlMail = require('../config/mailHtml');
const { EmailSharp } = require('@material-ui/icons');
dotenv.config();

module.exports = (mail, token) => {
    let smtpTransport = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'elbrusteacher@bk.ru',
      pass: '-omP3erxXUA1',
    },
  });

  const options = {
    from: '"Буткемп" <elbrusteacher@bk.ru>',
    to: `<${mail}>`,
    subject: 'Привет это письмо от Буткемп',
    html: htmlMail(token),
  }
  if(mail) {
    smtpTransport.sendMail(options, function(error, response) {
      if (error) console.log(error);  
      else console.log("Message sent: " + response.message); 
    });
  };
};
