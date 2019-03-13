const mongoose = require('mongoose');

const amenSetSchema = new mongoose.Schema({
  home_id: Number,
  amenities: Array
});


let AmenSetModel = mongoose.model('amensetlists', amenSetSchema,'amensetlists'); 
// add the third argument with the name
// of the collection to have mongoose
// connect to an existing collection

module.exports = AmenSetModel;
