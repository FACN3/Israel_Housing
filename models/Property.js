const mongoose = require('mongoose');
const { Schema } = mongoose;

const propertySchema = new Schema({
  name: String,
  price: Number,
  location: String,
  p_type: String,
  imageUrl: String,
  size: Number,
});

module.exports = mongoose.model('property', propertySchema);
