const jwt = require('jsonwebtoken');
const Message = require('../models/Message');
const { sendMsg } = require('../controllers/nodemailer');


const jwtSend = async (req, res) => {
  const { emails, groupId } = req.body;
  let resultArr = [];
  for (let i = 0; i < emails.length; i += 1) {
    try {
      const payload = {
        email: emails[i],
        groupId: groupId
      };
      const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_DATE });
      if (token) {
        const resultSend = await sendMsg(token);
        if (resultSend) {
          const msgsend = await Message.create({ jwtnum: token, email: payload.email, groupId: payload.groupId });
          resultArr.push({ email: msgsend.email, status: true });
          //return res.json({ msg: msgsend.jwtnum });
        } else {
          console.log('ERROR SEND MSG!!!!');
          resultArr.push({ email: emails[i], status: false, msg: 1 });
          //return res.json({ msg: 'ERROR SEND MSG!!!!' });
        }
      }
      else
        resultArr.push({ email: emails[i], status: false, msg: 2 });
      // return res.json({ msg: 'Error1' });

    } catch {
      resultArr.push({ email: emails[i], status: false, msg: 3 });
      // return res.json({ msg: 'Error2' });
    }
  }
  return res.json({ result: resultArr });
};


const jwtReceive = async (req, res) => {
  try {
    const token = req.body.token;
    if (token) {
      const msg = await Message.findOne({ jwtnum: token })
      if (msg) {
        res.json({ token: msg.jwtnum, email: msg.email, groupId: msg.groupId });
      }
    }
    else
      res.json({ msg: 'Error1' });
  } catch {
    res.json({ msg: 'Error2' });
  }

};

module.exports = { jwtSend, jwtReceive };
