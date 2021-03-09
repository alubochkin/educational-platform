var mongoose = require('mongoose');

var storFileSchema = new mongoose.Schema({
  fieldname: String,
  originalname: String,
  encoding: String,
  mimeptype: String,
  destination: String,
  filename: String,
  path: String,
  size: Number,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  schId: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' },
  created_at: Date,
  updated_at: Date
},
  {
    timestamps: true
  });
var StorFile = mongoose.model('StorFile', storFileSchema);

module.exports = StorFile;
