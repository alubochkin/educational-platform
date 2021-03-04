const nodemailer = require('nodemailer')

const sendMsg = async (tocken) => {

  let transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 25,
    secure: false,
    ignoreTLS: true
  })


  await transporter.sendMail({
    from: 'ttt@ttt.ru',
    to: 'ttt2@ttt2.ru',
    subject: 'Message registration',
    text: 'This message was sent from registration server.'
  }).then((data) => { console.log(data) }).catch((err) => { console.log(err) });

};
module.exports = { sendMsg };
// console.log(sendMsg());
