const nodemailer = require('nodemailer')

const sendMsg = async (tocken) => {

  let transporter = nodemailer.createTransport({
    host: 'olga-HP-Laptop-17-ca2xxx',
    port: 25,
    secure: false,
    ignoreTLS: true
  })


  await transporter.sendMail({
    from: 'olga@olga-HP-Laptop-17-ca2xxx',
    to: 'kolb2006puma@mail.ru',
    subject: 'Message registration',
    text: 'This message was sent from registration server.'
  }).then((data) => { console.log(data) }).catch((err) => { console.log(err) });

};
module.exports = { sendMsg };
// console.log(sendMsg());
