const DataBase = require('./../../databaseMongoDB');
const AmenitiesModel = require('./../../databaseMongoDB/models/amenitiesModel.js');
const AmenSetModel = require('./../../databaseMongoDB/models/amenSetModel.js');

// const { AmenitiesModel, AmenSetModel } = require('./../../databaseMongoDB/models');

let amenities = {};

DataBase.connection.on('open', function (err, ref) {
  console.log('Connected to mongo serverhi.');
  AmenitiesModel.find((err, data, info) => {
    if(err) {
      throw ("error!!");
    } 
    else {
      data.map(value => {
        let temp = {
          id: value.id,
          name: value.name,
          appeal: value.appeal,
          category: value.category,
          common: value.common,
          description: value.description,
          img_url: value.img_url,
          included: 1
        }
        amenities[value.id] = temp;
        return temp;
      });
    }
  })
})


const getAll = function (req, res) {
  let homeId = req.params.homeId;
  console.log("AmenSetModel");
  AmenSetModel.find({home_id: homeId}, (err, data, response) => {
    if(err) {
      throw ("ERROR!");
    } else {
      let amenSet = data[0].amenities;
      let willSend = amenSet.map(value => amenities[value]);
      console.log(amenSet);
      res.send(JSON.stringify(willSend))
    }
  });
}

// const updateAmens = function (req, res) {
  
// }

module.exports = {
  getAll
};