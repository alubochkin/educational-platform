const mongoose = require('mongoose');


const teacherSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  firstName: { type: String },
  lastName: { type: String },
});

module.exports = mongoose.model('Teacher', teacherSchema);
