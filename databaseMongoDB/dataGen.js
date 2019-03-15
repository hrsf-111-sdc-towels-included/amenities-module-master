const stream = require('stream');
const fs = require('fs');

const streamAmenities = fs.createWriteStream(`${__dirname}/data/amenityList.json`);
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
            const tempObj = {
                id: array[counter][0],
                name: array[counter][1],
                appeal: array[counter][2],
                category: array[counter][3],
                common: array[counter][4],
                description: array[counter][5],
                img_url: array[counter][6],
            }
            var data = JSON.stringify(tempObj) + "\n";
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
    return generatedData;
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
