const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: Number, required: true }, //1-студент, 2- препод, 3-админ
  avatar: { type: Buffer }
  // phoneNumber: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
