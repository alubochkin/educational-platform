const mongoose = require('mongoose');

const phaseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  titleSpec: { type: String },
  status: { type: Number, default: 1 },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isShow: { type: Boolean, default: false }
});

module.exports = mongoose.model('Phase', phaseSchema);
