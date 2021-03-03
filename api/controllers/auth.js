const getSignin = (req, res) => res.render('signin');
const getSignup = (req, res) => res.render('signup');

const postSignup = (req, res) => {
  console.log('file-auth.js res.session', res.session);
  res.end();
};

const postSignin = (req, res) => {
  console.log('file-auth.js res.locals', res.locals);
  res.end();
};

// eslint-disable-next-line no-unused-vars
const signOut = (req, res, next) => {
  req.logout();
  res.redirect('/');
};

module.exports = {
  getSignin, getSignup, postSignup, postSignin, signOut,
};
