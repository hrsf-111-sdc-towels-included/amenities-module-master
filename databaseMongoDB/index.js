const mongoose = require('mongoose');
// const { AmenitiesModel, AmenSetModel } = require('./../databaseMongoDB/models');

const AmenitiesModel = require('./../databaseMongoDB/models/amenitiesModel.js');
const AmenSetModel = require('./../databaseMongoDB/models/amenSetModel.js');


mongoose.connect('mongodb://localhost/amenities', { useNewUrlParser: true });

const connection = mongoose.connection;

let amenities = {};



module.exports = {
  amenities,
  connection
}