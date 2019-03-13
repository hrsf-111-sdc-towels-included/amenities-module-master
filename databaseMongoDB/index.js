const mongoose = require('mongoose');
// const { AmenitiesModel, AmenSetModel } = require('./../databaseMongoDB/models');

const AmenitiesModel = require('./../databaseMongoDB/models/amenitiesModel.js');
const AmenSetModel = require('./../databaseMongoDB/models/amenSetModel.js');


mongoose.connect('mongodb://localhost:27017/amenities', { useNewUrlParser: true });

const connection = mongoose.connection;

let amenities = {};


// connection.on('open', function (err, ref) {
//   console.log('Connected to mongo serverhi.');

//   AmenitiesModel.find((err, data, info) => {
//     if(err) {
//       throw ("error!!1");
//     } 
//     else {
//       data.map(value => {
//         let temp = {
//           id: value.id,
//           name: value.name,
//           appeal: value.appeal,
//           category: value.category,
//           common: value.common,
//           description: value.description,
//           img_url: value.img_url,
//           included: 1
//         }
//         amenities[value.id] = temp;
//         return temp;
//       });
//     }
//   })
// })

// const getAmenenities = function (homeId, callback) {
//   amenSetModel.find({home_id: homeId}, (err, data, response) => {
//     if(err) {
//       callback(err);
//     } else {
//       let amenSet = data[0].amenities;
//       callback(null, amenSet.map(value => {
//         return amenities[value];
//       }));
//     }
//   });
// };

module.exports = {
  amenities,
  connection
}