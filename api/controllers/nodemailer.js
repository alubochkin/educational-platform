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

    const options = {
      from: `"Node js" <${process.env.MSG_FROM}>`,
      to: `<${process.env.MSG_TO}>`,
      subject: 'Message from Node js',
      html: '<h1>Hello msg.<h1/>',
    }

    transporter.sendMail(options, function (error, response) {
      if (error) {
        console.log(error);
        // res.end("error");
        return false;
      } else {
        console.log("Message sent: " + response.message);
        // res.end("sent");
        return true
      }
    });
  } catch {
    console.log('ERROR SEND MSG!!!!');
    return false;
  }
};
module.exports = { sendMsg };
