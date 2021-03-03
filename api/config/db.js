const mongoose = require('mongoose');
const MongoStore = require('connect-mongo').default;
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.DB_PATH, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const dbConnection = mongoose.connection;

const sessionStore = MongoStore.create({ mongoUrl: process.env.SESSION_DB_PATH });

module.exports = {
  dbConnection,
  sessionStore,
};
