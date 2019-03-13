const mongoose = require('mongoose');

const amenitiesSchema = new mongoose.Schema({ 
  id: Number,
  name: String,
  appeal: Number,
  category: String,
  common: Boolean,
  description: String,
  img_url: String,
});

let AmenitiesModel = mongoose.model('amenitylists', amenitiesSchema, 'amenitylists');

module.exports = AmenitiesModel;