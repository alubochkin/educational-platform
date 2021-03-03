const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
  groupName: { type: String, required: true },
  penalty: { type: Number, default: 0 }
});

module.exports = mongoose.model('Student', studentSchema);
