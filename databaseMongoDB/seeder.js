const mongoose = require('mongoose');
const csvToJson = require('csvtojson');
const fs = require('fs');
const LineInputStream = require('line-input-stream');

mongoose.connect('mongodb://localhost:27017/amenities', { useNewUrlParser: true });

// mongoose.connection.db.dropCollection('amenitylists', (err, response) => {
//   if (err) {
//     throw ("error");
//   } else {
//     console.log(response);
//   }
// })

// mongoose.connection.db.dropCollection('amenSetList', (err, response) => {
//   if (err) {
//     throw ("error");
//   } else {
//     console.log(response);
//   }
// })



var amenitySchema = new mongoose.Schema({
  "home_id": Number,
  "amenities": Array
});

var obj = {
  "home_id": 0,
  "amenities": [1, 4, 5, 7]
};
var amenityCollection = mongoose.model('amenitylist', amenitySchema);
amenityCollection.create(obj);

var amenSetSchema = new mongoose.Schema({
  id: Number,
  name: String,
  appeal: Number,
  category: String,
  common: Boolean,
  description: String,
  img_url: String,
});

var newObj = {
  id: 0,
  name: "String",
  appeal: 2,
  category: "String",
  common: false,
  description: "String",
  img_url: "String",
}

var amenSetCollection = mongoose.model('amenSetList', amenSetSchema);
amenSetCollection.create(newObj);




// csvToJson().fromFile(`${__dirname}/amenityList.csv`).then((importedData) => {
//   amenityCollection.collection.insert(importedData, (err, response) => {
//     if (err) {
//       throw ("error");
//     } else {
//       console.log("inserted amens");
//     }
//   });
// });

// csvToJson().fromFile(`${__dirname}/amenitySets.csv`).then((importedData) => {
//   amenSetCollection.collection.insert(importedData, (err, response) => {
//     if (err) {
//       throw ("error");
//     } else {
//       console.log("inserted sets");
//       mongoose.connection.close();
//     }
//   })
// })

