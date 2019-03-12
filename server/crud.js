const dbM = require('./../databaseMongoDB');

const getAll = function (req, res) {
  dbM.getAmenenities(req.params.homeId, (err, amenData) => {
    if(err) {
      throw err;
    } else {
      // console.log(amenData);
      stringedAmenData = JSON.stringify(amenData)
      res.send(stringedAmenData).end(200);
    }
  })
}

const updateAmens = function (req, res) {
  
}

module.exports = {
  getAll
}