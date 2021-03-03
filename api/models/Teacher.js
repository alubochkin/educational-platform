const mongoose = require('mongoose');


const teacherSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
});

module.exports = mongoose.model('Teacher', teacherSchema);
