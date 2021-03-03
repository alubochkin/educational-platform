/* eslint-disable consistent-return */
const passport = require('passport');
const passportLocal = require('passport-local');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, { username: user.username, id: user.id, role: user.role });
  });
});

const authenticateuser = async (req, email, pass, done) => {
  const { username, role } = req.body;
  // console.log('>>>>>>PASSPORT<<<<<', req.body);

  try {
    if (/signin/.test(req.path)) {
      const user = await User.findOne({ email }).exec();
      if (!user) return done(null, false);
      if (await bcrypt.compare(pass, user.password)) return done(null, user);
    }
    if (/signup/.test(req.path) && email && pass && username && role) {
      try {
        const hashPass = await bcrypt.hash(pass, 10);
        const newUser = new User({
          username,
          email,
          password: hashPass,
          role,
        });
        await newUser.save();
        done(null, newUser);
      } catch (e) {
        return done(null, false);
      }
    }
  } catch (error) {
    done(error);
  }
};

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    authenticateuser,
  ),
);
