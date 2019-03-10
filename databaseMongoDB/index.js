const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/amenities', { useNewUrlParser: true });

const connection = mongoose.connection;
let amenities = {};

// const database = mongoose.connection;

// database.db.collectionNames((err, data) => {
//   if (err) throw("errrrrr!");
//   console.log(data);
// });

let amenitiesModel = mongoose.model('amenitylists', 
  new mongoose.Schema({ 
    id: Number,
    name: String,
    appeal: Number,
    category: String,
    common: Boolean,
    description: String,
    img_url: String,
  }), 
  'amenitylists'
);

let amenSetModel = mongoose.model('amensetlists',
  new mongoose.Schema({
    home_id: Number,
    amenities: Array
  }),
  'amensetlists' // add the third argument with the name
);               // of the collection to have mongoose
                 // connect to an existing collection


connection.on('open', function (err, ref) {
  console.log('Connected to mongo serverhi.');

  amenitiesModel.find((err, data, info) => {
    if(err) {
      throw ("error!!1");
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


const getAmenenities = function (homeId, callback) {
  amenSetModel.find({home_id: homeId}, (err, data, response) => {
    if(err) {
      callback(err);
    } else {
      let amenSet = JSON.parse(data[0].amenities[0]);
      callback(null, amenSet.map(value => {
        console.log(value[0]);
        return amenities[value];
      }));
    }
  });
};

module.exports ={
  getAmenenities,
}