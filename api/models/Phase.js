const mongoose = require('mongoose');

const phaseSchema = new mongoose.Schema({
  title: { type: String, required: true }
    
});

module.exports = mongoose.model('Phase', phaseSchema);
