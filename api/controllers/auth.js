const Student = require('../models/Student');
const Teacher = require('../models/Teacher');

const authSignup = async (req, res) => {
  let userAuth;
  try {
    if (req.user.role === 3) {
      userAuth = await Student.create({
        userId: req.user._id, firstName: req.user.firstName, lastName: req.user.lastName,
        groupId: req.body.groupId, groupName: req.body.groupName
      });
    }
    else {
      userAuth = await Teacher.create({ userId: req.user._id, firstName: req.user.firstName, lastName: req.user.lastName });
    }
    return res.json(userAuth);
  } catch
  {
    return res.status(500).render('error');
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
