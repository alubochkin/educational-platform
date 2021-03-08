const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  contentPlan: { type: String, default: '' },
  linkPlan: { type: String, default: '' },
  schId: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' },
});

module.exports = mongoose.model('Schedule', scheduleSchema);
