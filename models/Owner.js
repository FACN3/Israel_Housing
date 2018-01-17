const mongoose = require('mongoose');
const { Schema } = mongoose;

const ownerSchema = new Schema({
  name: String,
  email: String,
  phone: String,
});

mongoose.model('owner', ownerSchema);
