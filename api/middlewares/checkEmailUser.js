const User = require('../models/User');

module.exports = async (req, res, next) => {
  const email = req.body?.email;
  if (email) {
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(401).render('user with this email is already registered');
    }
  } else return res.status(401).render('invalid email');
  next();
};
