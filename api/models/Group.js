const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  title: { type: String, required: true },
  start: { type: Date, default: 0 },
  finish: { type: Date, default: 0 },
  status: { type: Boolean, default: false },
  // phaseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Phase', required: true },
  // phaseTitle: { type: String, required: true}
});

module.exports = mongoose.model('Group', groupSchema);
