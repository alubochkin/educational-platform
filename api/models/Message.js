const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
  jwtnum: { type: String, required: true },
  email: { type: String, required: true },
  groupId: { type: String, required: true },
});

module.exports = mongoose.model('Message', messageSchema);
