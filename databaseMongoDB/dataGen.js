const csvWritter = require('csv-writer');
const stream = require('stream');
const fs = require('fs');

const streamAmenities = fs.createWriteStream(`${__dirname}/data/amenityList.csv`);
const streamAmenSets = fs.createWriteStream(`${__dirname}/data/amenitySets.json`);

var randomBool = function () {
    var boolArr = [true, false];
    return boolArr[Math.floor(Math.random() * boolArr.length)];
}

// amenities info seeding:
var amenitiesData = [
    [1,'Wifi',9,'Basic',true,'Continuous access in the listing','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/wifi.png'],
    [2, 'Breakfast',3,'Basic',false,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/breakfast.png'],
    [3, 'Washer',5,'Basic',false,'In the building, free or for a fee','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/washer.png'],
    [4, 'Dryer',5,'Basic',false,'In the building, free or for a fee','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/dryer.png'],
    [5, 'Pet friendly',8,'Facilities',false,'Guest responsible for all pet related damages','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/pets.png'],
    [6, 'Fireplace',7,'Facilities',false,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/fireplace.png'],
    [7, 'Free parking',7,'Facilities',true,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/parking.png'],
    [8, 'Kitchen',6,'Facilities',true,'Space where guests can cook their own meals','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/kitchen.png'],
    [9, 'Cable TV',5,'Basic',true,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/tv.png'],
    [10, 'Air conditioning',4,'Basic',true,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/ac.png'],
    [11, 'Pickle jar',9,'Hip',true,'Mason jar filled w/ dill','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/jar.png'],
    [12, 'French press',9,'Hip',true,'Fair Trade coffee only','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/frenchpress.png'],
    [13, 'VHS player',3,'Hip',false,'Be kind rewind','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/vhs.png'],
    [14, 'Fixie rack',3,'Hip',false,'Who needs gears?','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/bikerack.png'],
    [15, 'Carbon monoxide detector',0,'Facilities',true,'','https://s3-us-west-2.amazonaws.com/amenities-photos/amenities+icons/coDetector.png'],
];


function writeAmenStream (array, writerStream, encoding, callback) {
    var header = 'id,name,appeal,category,common,description,img_url\n';
    writerStream.write(header, encoding);
    var counter = 0;
    var able = true;
    const seed = () => {
        while (counter < array.length) {
            var data = array[counter].toString() + "\n";
            able = writerStream.write(data, encoding);
            counter++;
            if (!able) break;
        }
        if (counter + 1 < array.length) {
            writerStream.once('drain', seed);
        } else if (counter >= array.length - 1) {
            callback(null);
        }
    };
    seed();
}

writeAmenStream(amenitiesData, streamAmenities, 'utf-8', (err) => {
    if (err) {
        throw('Its an ERROR!')
    } else {
        console.log("DOING IT!");
    }
});

function generateStringAmenities(array) {
    var generatedData = [];
    while ((generatedData.length < 5) || (generatedData.length > 12)) {
        generatedData = array.filter(() => randomBool());
    }
    return "[" + generatedData.toString() + "]";
};

function writeAmenHomeSetStream(number, dataGenerator, writerStream, encoding, callback) {
    var startTime = new Date();
    var amenitySets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    var header = 'home_id,amenities\n'
    // writerStream.write(header, encoding);
    var counter = 1;
    var goAhead = true;
    const seedingFunc = () => {
        while (counter <= number) {
            // var data = `${counter},"${dataGenerator(amenitySets)}"\n`;
            var data = {
                home_id: counter,
                amenities: dataGenerator(amenitySets)
            }
            goAhead = writerStream.write(JSON.stringify(data) + '\n', encoding);
            counter++;
            if (!goAhead) break;
        }
        if (counter < number) {
            writerStream.once('drain', seedingFunc);
        } else if (counter >= number - 1) {
            var endTime = new Date();
            console.log(`It took ${(endTime - startTime)/1000.0} Seconds` )
            callback(null);
        }
    }
    seedingFunc();
}

writeAmenHomeSetStream(10000000, generateStringAmenities, streamAmenSets, 'utf-8', (err) => {
    if (err) {
        throw('Its an ERROR!')
    } else {
        console.log("DOING IT!");
    }
})

// function writeNTimes(n, dataGenerator, writer, encoding, callback) {
//     const startTimer = new Date();
//     let i = n + 1;
//     let data;
//     const write = () => {
//       let ok = true;
//       do {
//         data = amenitiesData[i].toString() + '\n';
//         if (i === n + 1) {
//           data = 'id,name,appeal,category,common,description,img_url\n';
//           writer.write(data, encoding);
//         } else if (i === 1) {
//           // last time!
//           writer.write(data, encoding, callback);
//           const endTimer = new Date();
//           console.log(`Operation completed in ${endTimer - startTimer}ms`);
//         } else {
//           // see if we should continue, or wait
//           // don't pass the callback, because we're not done yet.
//           ok = writer.write(data, encoding);
//         }
//         i -= 1;
//       } while (i > 0 && ok);
//       if (i > 0) {
//         // had to stop early!
//         // write some more once it drains
//         writer.once('drain', write);
//       }
//     };
//     write();
//   }
  
//   writeNTimes(12, null, streamAmenities, 'utf-8', (err) => {
//     if(err) throw ("ERROR!");
//     else console.log("nice");
//   })

// var csvAmenitiesHead = csvWritter.createObjectCsvWriter({
//     path: `${__dirname}/amenityList.csv`,
//     header: [
//         {id: "id", title: "id"},
//         {id: "name", title: "name"},
//         {id: "appeal", title: "appeal"},
//         {id: "category", title: "category"},
//         {id: "common", title: "common"},
//         {id: "description", title: "description"},
//         {id: "img_url", title: "img_url"},
//     ],
// });

// var amenitiesInjecting = [];

// for (var i = 0; i < amenitiesData.length; i++) {
//     amenitiesInjecting.push({
//         name: amenitiesData[i][0] ,
//         appeal: amenitiesData[i][1] ,
//         category: amenitiesData[i][2] ,
//         common: amenitiesData[i][3] ,
//         description: amenitiesData[i][4] ,
//         img_url: amenitiesData[i][5] ,
//     });
// }

// csvAmenitiesHead.writeRecords(amenitiesInjecting);

//Create random sets of amenities

var csvHomesHead = csvWritter.createObjectCsvWriter({
    path: `${__dirname}/amenitySets.csv`,
    header: [
        {id: "home_id", title: "home_id"},
        {id: "amenitis", title: "amenities"},
    ]
});




// var csvHomesHead = csvWritter.createObjectCsvWriter({
//     path: `${__dirname}/amenitySets.csv`,
//     header: [
//         {id: "home_id", title: "home_id"},
//         {id: "Wifi", title: "Wifi"},
//         {id: "Washer", title: "Washer"},
//         {id: "Dryer", title: "Dryer"},
//         {id: "Pet", title: "Pet"},
//         {id: "Pet_friendly", title: "Pet_friendly"},
//         {id: "Fireplace", title: "Fireplace"},
//         {id: "Free_Parking", title: "Free_Parking"},
//         {id: "Kitchen", title: "Kitchen"},
//         {id: "Cable_tv", title: "Cable_tv"},
//         {id: "Air_conditioning", title: "Air_conditioning"},
//         {id: "Pickle_Jar", title: "Pickle_Jar"},
//         {id: "French_Press", title: "French_Press"},
//         {id: "VHS_player", title: "VHS_player"},
//         {id: "Fixie_rack", title: "Fixie_rack"},
//         {id: "Carbon_monoxide", title: "Carbon_monoxide"},
//     ]
// });

// var randomBool = function () {
//     var boolArr = [true, false];
//     return boolArr[Math.floor(Math.random() * boolArr.length)];
// }

// var fakeSet = {
//     "home_id": 0,
//     "Wifi": false,
//     "Washer": false,
//     "Dryer": false,
//     "Pet": false,
//     "Pet_friendly": false,
//     "Fireplace": false,
//     "Free_Parking": false,
//     "Kitchen": false,
//     "Cable_tv": false,
//     "Air_conditioning": false,
//     "Pickle_Jar": false,
//     "French_Press": false,
//     "VHS_player": false,
//     "Fixie_rack": false,
//     "Carbon_monoxide": false,
// }

// // const {    
//     var setsInjecting = [];
//     var fakeSetKeys = Object.keys(fakeSet);
//     for (var i = 0; i < 15; i++) {
//         var tempSet = {
//             "home_id": 0,
//             "Wifi": '[1, 2, 3, 4]',
//             "Washer": "[1, 2, 3, 4]",
//             "Dryer": [1, 2, 3, 4],
//             "Pet": [1, 2, 3, 4],
//             "Pet_friendly": false,
//             "Fireplace": false,
//             "Free_Parking": false,
//             "Kitchen": false,
//             "Cable_tv": false,
//             "Air_conditioning": false,
//             "Pickle_Jar": false,
//             "French_Press": false,
//             "VHS_player": false,
//             "Fixie_rack": false,
//             "Carbon_monoxide": false,
//         };
//         tempSet.home_id = i;
//         for (var j = 5; j < fakeSetKeys.length; j++) {
//             tempSet[fakeSetKeys[j]] = randomBool();
//         }
//         setsInjecting.push(tempSet);
//     }
// // }

// csvHomesHead.writeRecords(setsInjecting);



// var random