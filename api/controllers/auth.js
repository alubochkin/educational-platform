const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const Message = require('../models/Message');
const Group = require('../models/Group');

const authSignup = async (req, res) => {

  let group = req.body?.groupName || '';
  const token = req.body?.token || '';
  try {
    if (token) {
      const msg = await Message.findOne({ jwtnum: token })
      if (msg) {
        await msg.remove();
      } else {
        if (req.user.email) {
          const msgEmail = await Message.findOne({ email: req.user.email });
          if (msgEmail) await msgEmail.remove();
        }
      }
    }
    if (req.user.role === 3) {
      if (req.body.groupId && !group) {
        group = await Group.findById(req.body.groupId);
      }
      await Student.create({
        userId: req.user._id, firstName: req.user.firstName, lastName: req.user.lastName,
        groupId: req.body.groupId, groupName: group.groupTitle
      });
    }
    else {
      await Teacher.create({ userId: req.user._id, firstName: req.user.firstName, lastName: req.user.lastName });
    }
    return res.json({ user: req.user });
  } catch
  {
    return res.status(500).json({ err: 'error' });
  }
};

const postSignin = (req, res) => {
  res.json({ user: req.user });
};

// eslint-disable-next-line no-unused-vars
const signOut = (req, res, next) => {
  req.logout();
  res.json({});
};

module.exports = {
  postSignin, signOut, authSignup,
};
