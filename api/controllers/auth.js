const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const studentSignup = async (req, res) => {
  const student = await Student.create({
    userId: req.user._id, firstName: req.user.firstName, lastName: req.user.lastName,
    groupId: req.body.groupId, groupName: req.body.groupName
  });
  res.json(student);
};

const teacherSignup = async (req, res) => {
  const teacher = await Teacher.create({ userId: req.user._id, firstName: req.user.firstName, lastName: req.user.lastName });
  res.json({ teacher: teacher.id });
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
  teacherSignup, studentSignup, postSignin, signOut,
};
