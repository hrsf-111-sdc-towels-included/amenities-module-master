const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/amenities', { useNewUrlParser: true });

const viewerSchema = new mongoose.Schema({
  homeId: Number,
  url: String,
  thumb_url: String,
  is_primary: Boolean,
  description: String,
});

const DataModel = mongoose.model('DataModel', viewerSchema);

var obj = {
  homeId: 0,
  url: "String",
  thumb_url: "String",
  is_primary: true,
  description: "String",
};

DataModel.create(obj).then(() => {
  mongoose.connection.close();
})