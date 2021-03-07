/* eslint-disable consistent-return */
const passport = require('passport');
const passportLocal = require('passport-local');
const bcrypt = require('bcrypt');

const User = require('../models/User');

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, { firstName: user.firstName, lastName: user.lastName, id: user._id, email: user.email, role: user.role });
  });
});

const authenticateuser = async (req, email, pass, done) => {
  const { firstName, lastName, role } = req.body;
  // console.log('>>>>>>PASSPORT<<<<<', req.path);

  try {
    if (/signin/.test(req.path)) {
      const user = await User.findOne({ email }).exec();
      if (!user) return done(null, false);
      if (await bcrypt.compare(pass, user.password)) return done(null, user)
      else done(null, false);
    }
    if (/signup/.test(req.path) && email && pass && role && firstName && lastName) {
      try {
        const hashPass = await bcrypt.hash(pass, 10);
        const newUser = new User({
          firstName,
          lastName,
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
