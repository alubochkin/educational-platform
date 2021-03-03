const { dbConnection } = require('./config/db');
const app = require('./app.js');

dbConnection
  .on('connected', () => {
    console.log('Mongoose default connection open to ' + process.env.DB_PATH);
  })
  .on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
  })
  .on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
  });

const port = process.env.PORT || 3100;
app.listen(port, () => {
  console.log('Server started at http//localhost:%s', port);
});
