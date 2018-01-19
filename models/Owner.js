const mongoose = require('mongoose');
const { Schema } = mongoose;

const ownerSchema = new Schema({
  name: String,
  email: String,
  phone: String,
});

module.exports = mongoose.model('owner', ownerSchema);
