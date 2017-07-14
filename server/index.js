// server/index.js
'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const app = require('./app');
var path       = require('path');


//var app = express();
const PORT = process.env.PORT || 9600;

// //app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// //app.use(bodyParser.json({type:'application/vnd.api+json'}));

//app.use(express.static('./public'));
//app.use(express.static(path.join(__dirname,"../public")));
app.use(express.static(path.join(__dirname,"")));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, '/', 'index.html'))
});

// -------------------------------------------------


// MongoDB Configuration configuration (Change this URL to your own DB)
    mongoose.connect('mongodb://localhost/reactexpress');
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('Mongoose Error: ', err);
});

db.once('open', function () {
    console.log('Mongoose connection successful.');
});


// -------------------------------------------------


// app.get('/', function(req, res){
//     res.sendFile('index.html');
// });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
