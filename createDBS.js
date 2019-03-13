const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/amenities');

const amenSetSchema = new mongoose.Schema({
  home_id: Number,
  amenities: Array
});


let AmenSetModel = mongoose.model('amensetlists', amenSetSchema); 

let test1 = new AmenSetModel({
  home_id: 0,
  amenities: []
});

AmenSetModel.create(test1, (err, res) => {
  if (err) {
    throw ("errororor!");
  } else {
    console.log(res);
  }
})

const amenitiesSchema = new mongoose.Schema({ 
  id: Number,
  name: String,
  appeal: Number,
  category: String,
  common: Boolean,
  description: String,
  img_url: String,
});

let AmenitiesModel = mongoose.model('amenitylists', amenitiesSchema);

let test2 = new AmenitiesModel({
  id: 0,
  name: "String",
  appeal: 0,
  category: "String",
  common: false,
  description: "String",
  img_url: "String",
});

AmenitiesModel.create(test2, (err, res) => {
  if (err) {
    throw ("errororor!");
  } else {
    console.log(res);
  }
})