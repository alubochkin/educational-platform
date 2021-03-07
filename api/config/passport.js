/* eslint-disable consistent-return */
const passport = require('passport');
const passportLocal = require('passport-local');
const bcrypt = require('bcrypt');

const User = require('../models/User');
console.log('>>>>>>>>>>>top')
const LocalStrategy = passportLocal.Strategy;

passport.serializeUser((user, done) => {
  console.log('>>>>>>>>>>> login')
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('>>>>>>>>>>> deserializeUser');
  console.log(id)
  User.findById(id, (err, user) => {
    done(err, { firstName: user.firstName, lastName: user.lastName, id: user._id, email: user.email, role: user.role });
  });
});

const authenticateuser = async (req, email, pass, done) => {
  console.log('>>>>>>PASSPORT<<<<<', req.path);
  const { firstName, lastName, role } = req.body;

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
        console.log('>>>>>>>>>>>>1')
        return done(null, false);
      }
    }
  } catch (error) {
    console.log('>>>>>>>>>>>>2')
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
