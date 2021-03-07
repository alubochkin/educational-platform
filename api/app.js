const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const morgan = require('morgan');
// const multer = require("multer");
const { sessionStore } = require('./config/db');
const notFoundMiddleware = require('./middlewares/notfound404.js');
const errorMiddleware = require('./middlewares/error.js');
const authRouter = require('./routes/auth');
const sendmsgRouter = require('./routes/sendmsg');
const groupRouter = require('./routes/group.router');
const moduleRouter = require('./routes/module.router');
// const isAuthMiddleware = require('./middlewares/isAuth.middleware')
require('./config/passport');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

const corsOptions = {
  // origin: /\.your.domain\.com$/,    // reqexp will match all prefixes
  origin: '*',
  methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS",
  credentials: true,                // required to pass
  allowedHeaders: "Content-Type, Authorization, X-Requested-With",
}
app.use(cors(corsOptions));
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
//   if (req.method === 'OPTIONS') {
//     return res.sendStatus(200);
//   }
//   next();
// });
// app.use(cors());
// app.use(multer({ dest: "uploads" }).single("filedata"));
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
// app.use(userMiddleware);
app.use('/auth', authRouter);
app.use('/sendmsg', sendmsgRouter);
app.use('/group', groupRouter);
app.use('/module', moduleRouter);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;