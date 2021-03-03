const postSignup = (req, res) => {
  console.log('file-auth.js res.userUp', res.user);
  res.json({ user: res.user });
};

const postSignin = (req, res) => {
  console.log('file-auth.js res.userIn', res.user);
  res.json({ user: res.user });
};

// eslint-disable-next-line no-unused-vars
const signOut = (req, res, next) => {
  req.logout();
  res.json({});
};

module.exports = {
  postSignup, postSignin, signOut,
};
