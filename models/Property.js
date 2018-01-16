const mongoose = require('mongoose');
const { Schema } = mongoose;

const propertySchema({
name:String,
price:Number,
location:String,
p_type:String,
size:Number

})

mongoose.model('property',propertySchema);