const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const morgan = require('morgan');
const { sessionStore } = require('./config/db');
const notFoundMiddleware = require('./middlewares/notfound404.js');
const errorMiddleware = require('./middlewares/error.js');
const authRouter = require('./routes/auth');
const sendmsgRouter = require('./routes/sendmsg');
const groupRouter = require('./routes/group.router');
const moduleRouter = require('./routes/module.router');
const scheduleRouter = require('./routes/schedule.router');
const uploadRouter = require('./routes/fileSch.router');
const userRouter = require('./routes/user.router');

require('./config/passport');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const corsOptions = {
  // origin: /\.your.domain\.com$/,    // reqexp will match all prefixes
  origin: 'http://localhost:3000',
  methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS",
  credentials: true,                // required to pass
  allowedHeaders: "Origin, Content-Type, Authorization, X-Requested-With",
}
app.use(cors(corsOptions));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 2,
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/sendmsg', sendmsgRouter);
app.use('/user', userRouter);
app.use('/group', groupRouter);
app.use('/module', moduleRouter);
app.use('/schedule', scheduleRouter);
app.use('/upload', uploadRouter);
app.use(notFoundMiddleware);
app.use(errorMiddleware);
module.exports = app;
