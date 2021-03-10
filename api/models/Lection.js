const mongoose = require('mongoose');

const lectionSchema = new mongoose.Schema({
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
  phaseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Phase', required: true },
  phaseTitle: { type: String, default: '' },
  schId: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule', required: true },
  schTitle: { type: String, default: '' },
  week: { type: Number, default: 0 },
  dayWeek: { type: Number, default: 0 },
  dayWeekText: { type: String, default: '' },
  task: { type: String, default: '' }
});

module.exports = mongoose.model('Lection', lectionSchema);
