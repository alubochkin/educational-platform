const mongoose = require('mongoose');

const lectionSchema = new mongoose.Schema({
  groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
  groupTitle: { type: String, required: true },
  date: { type: Date, ref: 'Date', required: true },
  link: { type: String, default: null },
  phaseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Phase', required: true },
  phaseTitle: { type: String, default: '' },
  kode: { type: String, default: '' },
  presentation: { type: String, default: '' },
  linksLection: { type: String, default: '' },
  linksVideo: { type: String, default: ''},
  linksResours: { type: String, default: ''}
});

module.exports = mongoose.model('Lection', lectionSchema);
