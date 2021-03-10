const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: Number, required: true }, 
  avatar: { type: Buffer }
  // phoneNumber: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
