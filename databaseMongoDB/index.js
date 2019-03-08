const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/amenities', { useNewUrlParser: true });

// let listingSchema = mongoose.Schema({
//   "home_id": Number,
//   "Wifi": Boolean,
//   "Washer": Boolean,
//   "Dryer": Boolean,
//   "Pet": Boolean,
//   "Pet_friendly": Boolean,
//   "Fireplace": Boolean,
//   "Free_Parking": Boolean,
//   "Kitchen": Boolean,
//   "Cable_tv": Boolean,
//   "Air_conditioning": Boolean,
//   "Pickle_Jar": Boolean,
//   "French_Press": Boolean,
//   "VHS_player": Boolean,
//   "Fixie_rack": Boolean,
//   "Carbon_monoxide": Boolean,
// });

// let listing = mongoose.model();