const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  firstName: { type: String },
  lastName: { type: String },
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
  groupName: { type: String, default: '' },
  penalty: { type: Number, default: 0 }
});

module.exports = mongoose.model('Student', studentSchema);
