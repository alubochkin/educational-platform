const nodemailer = require('nodemailer')

const sendMsg = async (tocken) => {
  try {
    let transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MSG_USER, // generated ethereal user
        pass: process.env.MSG_PASSVORD, // generated ethereal password
      },
    });
    transporter.sendMail({
      from: `<${process.env.MSG_FROM}>`,
      to: process.env.MSG_TO,
      subject: 'Message registration',
      text: `This message was sent from registration server. http://localhost:3100/registration?invtoken=${tocken}`
    }).then((data) => { console.log('Yes Send', data); return true; }).catch((err) => { console.log('###', err); return false; });

  } catch {
    console.log('%%%%');
    console.log('ERROR SEND MSG!!!!');
    return false;
  }


};
module.exports = { sendMsg };
// console.log(sendMsg());
