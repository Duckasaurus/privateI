const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const clickController = require('./database/controller/clickController.js');
const scrollController = require('./database/controller/scrollController.js');
const mongoose = require('mongoose');

let mongoURI = 'mongodb://jerryjong:codesmith123@ds127173.mlab.com:27173/private-i';

mongoose.connect(mongoURI);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.post('/storeClick',
    clickController.mapClick,
    clickController.createClick
)

app.post('/storeScroll',
    scrollController.createScroll
)

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});