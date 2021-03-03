const mongoose = require('mongoose');


const disciplineSchema = new mongoose.Schema({
  title: { type: String, required: true },
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
  teacherName: { type: String, required: true },
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
  groupTitle: { type: String, required: true },
});

module.exports = mongoose.model('Discipline', disciplineSchema);
