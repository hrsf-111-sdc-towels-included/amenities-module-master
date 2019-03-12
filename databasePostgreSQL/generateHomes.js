const fs = require('fs');
const streamHomes = fs.createWriteStream(`${__dirname}/data/homes.csv`);




function writeHomeStream(number, writerStream, encoding, callback) {
  var startTime = new Date();
  var header = 'id\n'
  writerStream.write(header, encoding);
  var counter = 1;
  var goAhead = true;
  const seedingFunc = () => {
      while (counter <= number) {
          var data = `${counter}\n`;
          goAhead = writerStream.write(data, encoding);
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

writeHomeStream(10000000, streamHomes, 'utf-8', (err) => {
  if (err) {
      throw('Its an ERROR!')
  } else {
      console.log("DOING IT!");
  }
})
