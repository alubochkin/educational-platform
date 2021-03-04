// const { uuid } = require('uuidv4');
const jwt = require('jsonwebtoken');
const Message = require('../models/Message');
const { sendMsg } = require('../controllers/nodemailer');

const jwtSend = async (req, res) => {
  try {
    const payload = {
      email: req.body.email,
      groupId: '1234567'
    };
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_DATE });

    if (token) {
      const msgsend = await Message.create({ jwtnum: token, email: payload.email, groupId: payload.groupId });

      const resultSend = await sendMsg(token);
      res.json({ msg: msgsend.jwtnum });
    }
    else
      res.json({ msg: 'Error1' });
  } catch {
    res.json({ msg: 'Error2' });
  }

};


const jwtReceive = async (req, res) => {
  try {
    const token = req.query.invtoken;
    if (token) {
      const msg = await Message.findOne({ jwtnum: token })
      if (msg) {
        const result = await msg.remove();
        res.json({ msg: result });
      }
    }
    else
      res.json({ msg: 'Error1' });
  } catch {
    res.json({ msg: 'Error2' });
  }

};

module.exports = { jwtSend, jwtReceive };
