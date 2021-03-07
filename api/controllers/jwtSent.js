const jwt = require('jsonwebtoken');
const Message = require('../models/Message');
const sendMsg = require('../config/sendRegistationStudend');


const jwtSend = async (req, res) => {
  const { emails, groupId } = req.body;

  console.log(emails)
  let resultArr = [];
  console.log(emails)
  for (let i = 0; i < emails.length; i += 1) {

    try {
      const payload = {
        email: emails[i],
        groupId: groupId
      };
      const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_DATE });
      console.log(token);
      if (token) {
        await sendMsg(emails[i], token);
        const msgsend = await Message.create({ jwtnum: token, email: payload.email, groupId: payload.groupId });
        resultArr.push({ email: msgsend.email, status: true });
      }
      else
        resultArr.push({ email: emails[i], status: false, msg: 2 });
    } catch {
      resultArr.push({ email: emails[i], status: false, msg: 3 });
    }
  }
  return res.json({ result: resultArr });
};


const jwtReceive = async (req, res) => {
  try {
    const token = req.body.token;
    if (token) {
      const msg = await Message.findOne({ jwtnum: token }).lean();
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
