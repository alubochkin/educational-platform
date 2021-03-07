const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  phaseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Phase' },
  phaseTitle: { type: String, required: true },
});

module.exports = mongoose.model('Schedule', scheduleSchema);
