const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/amenities', { useNewUrlParser: true });

const viewerSchema = new mongoose.Schema({
  "home_id": Number,
  "amenities": []
});

// "Wifi": Boolean,
// "Washer": Boolean,
// "Dryer": Boolean,
// "Pet": Boolean,
// "Pet_friendly": Boolean,
// "Fireplace": Boolean,
// "Free_Parking": Boolean,
// "Kitchen": Boolean,
// "Cable_tv": Boolean,
// "Air_conditioning": Boolean,
// "Pickle_Jar": Boolean,
// "French_Press": Boolean,
// "VHS_player": Boolean,
// "Fixie_rack": Boolean,
// "Carbon_monoxide": Boolean,
const DataModel = mongoose.model('DataModel', viewerSchema);

var obj = {
  "home_id": 0,
  "amenities": [1, 4, 5, 7]
};

DataModel.create(obj).then(() => {
  mongoose.connection.close();
})