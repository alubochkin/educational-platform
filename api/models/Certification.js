const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  disciplineId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Discipline', required: true },
  date: { type: Date, ref: 'Date', required: true },
  disciplineTitle: { type: String, required: true },
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test', required: true },
  testTitle: { type: String, required: true },
  balls: {type: Number, default: 0}
});

module.exports = mongoose.model('Certification', certificationSchema);
