//9aa966003a5b9fbae89ee57ea92867bf0bfaa278
require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dbS = require('./../databaseMySQL');
const dbM = require('./../databaseMongoDB');
const expressStaticGzip = require('express-static-gzip');
const crud = require('./controllers/crud.js');

const app = express();
const port = 3003;

app.use('/', expressStaticGzip(path.join(__dirname, '/../public'), {
  enableBrotli: true,
  customCompressions: [{
    encodingName: 'deflate',
    fileExtension: 'zz'
  }],
  orderPreference: ['br', 'gz']
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/amenities/:homeId', crud.getAll);

// app.post(`/api/amenities/:itemId`, (req, res) => {
//   res.send(201)
// });
// app.put(`/api/amenities/:itemID/:amenId`, (req, res) => {
//   res.send(201)
// });

// app.delete(`/api/amenities/:itemID/:amenId`, (req, res) => {
//   res.send(200)
// });

app.listen(port, () => {
  console.log(`I'm serving from http://localhost:${port}`);
});