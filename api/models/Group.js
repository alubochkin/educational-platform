const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  groupSpec: { type: String },
  groupTitle: { type: String, required: true },
  dateStart: { type: Date, default: new Date() },
  dateFinish: { type: Date, default: new Date() },
  strDateStart: { type: String, default: '' },
  strDateFinish: { type: String, default: '' },
  status: { type: Boolean, default: false },
});

module.exports = mongoose.model('Group', groupSchema);
