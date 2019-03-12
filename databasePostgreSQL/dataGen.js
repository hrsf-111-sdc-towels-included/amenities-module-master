const fs = require('fs');

const streamAmenities = fs.createWriteStream(`${__dirname}/data/amenityList.csv`);
const streamAmenSets = fs.createWriteStream(`${__dirname}/data/amenitySets.csv`);

function generateStringAmenities() {
  var amenitySets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  var generatedData = [];
  while ((generatedData.length < 5) || (generatedData.length > 12)) {
      generatedData = amenitySets.filter(() => randomBool());
  }
  return generatedData;
};

var randomBool = function () {
  var boolArr = [true, false];
  return boolArr[Math.floor(Math.random() * boolArr.length)];
}

function randomNumberGen(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function randomSet(min, max) {
  var numberOfAmens = randomNumberGen(min, max);
  var set = [];
  for (var i = 0; i < numberOfAmens; i++) {

    set.push(randomNumberGen(1, max));
  }
  return set;
}


var amenitiesData = [
  ['Wifi',9,'Basic',true,'Continuous access in the listing','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/wifi.png'],
  ['Breakfast',3,'Basic',false,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/breakfast.png'],
  ['Washer',5,'Basic',false,'In the building, free or for a fee','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/washer.png'],
  ['Dryer',5,'Basic',false,'In the building, free or for a fee','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/dryer.png'],
  ['Pet friendly',8,'Facilities',false,'Guest responsible for all pet related damages','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/pets.png'],
  ['Fireplace',7,'Facilities',false,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/fireplace.png'],
  ['Free parking',7,'Facilities',true,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/parking.png'],
  ['Kitchen',6,'Facilities',true,'Space where guests can cook their own meals','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/kitchen.png'],
  ['Cable TV',5,'Basic',true,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/tv.png'],
  ['Air conditioning',4,'Basic',true,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/ac.png'],
  ['Pickle jar',9,'Hip',true,'Mason jar filled w/ dill','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/jar.png'],
  ['French press',9,'Hip',true,'Fair Trade coffee only','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/frenchpress.png'],
  ['VHS player',3,'Hip',false,'Be kind rewind','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/vhs.png'],
  ['Fixie rack',3,'Hip',false,'Who needs gears?','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/bikerack.png'],
  ['Carbon monoxide detector',0,'Facilities',true,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/coDetector.png'],
];


function writeAmenStream (array, writerStream, encoding, callback) {
  var header = 'name,appeal,category,common,description,img_url\n';
  writerStream.write(header, encoding);
  var counter = 0;
  var goAhead = true;
  const seeder = () => {
    while (counter < array.length) {
      var dataWillInsert = array[counter].toString() + '\n';
      goAhead = writerStream.write(dataWillInsert, encoding);
      counter++;
      if (!goAhead) break;
    }
    if (counter + 1 < array.length) {
      writerStream.once('drain', seeder)
    } else {
      callback(null);
    }
  };
  seeder();
}

writeAmenStream(amenitiesData, streamAmenities, 'utf-8', (err) => {
  if (err) {
      throw('Its an ERROR!')
  } else {
      console.log("DOING IT!");
  }
});

// function writeSetStream(num, setGen, writerStream, encoding, callback) {
//   var start = new Date();
//   var header = "amen_id,home_id";
//   writerStream.write(header, encoding);
//   var counter = 1;
//   var miniCounter = 0;
//   var goAhead = true;
//   const loopInsert = () => {
//     var setSeeding = setGen(4, 15);
//     var tempGoAhead = true;
//     for(miniCounter; miniCounter < setSeeding.length; miniCounter++) {
//       tempGoAhead = writerStream.write(`${counter},${setSeeding[miniCounter]}\n`, encoding);
//       if (!tempGoAhead) {
//         miniCounter++;
//         break;
//       }
//     }
//     if (counter < num && ) {
//       writerStream.once('drain', loopInsert)
//     } else {
//       console.log("done");
//     }
//   };
//   while (counter <= num) {
//     loopInsert();
//     miniCounter = 0;
//     counter++;
//   }
//   var end = new Date();
//   console.log((end - start)/1000 + " seconds");
// }

function writeSetStream(num, setGen, writerStream, encoding) {
  var start = new Date();
  var header = "home_id,amen_id\n";
  writerStream.write(header, encoding);
  var counter = 1;
  // var miniCounter = 0;
  // var goAhead = true;
  var setSeeding = setGen(4, 15);
  const seeder = () => {
    var goAhead = true;
    do {
      if (setSeeding.length > 0) {
        goAhead = writerStream.write(`${counter},${setSeeding.splice(0, 1)[0]}\n`, encoding);
      } else if(setSeeding.length <= 0) {
        counter++;
        setSeeding = setGen(4, 15);
      }
      if (!goAhead) break;
    } while (counter <= num );
    if (counter <= num) {
      // console.log(counter);
      writerStream.once('drain', seeder);
    } else {
      var end = new Date();
      console.log(`took ${(end - start)/1000} seconds`);
    }
  };
  seeder();
}

writeSetStream(10000000, generateStringAmenities, streamAmenSets, 'utf-8', (err) => {
  if (err) {
      throw('Its an ERROR!')
  } else {
      console.log("DOING IT!");
  }
});