const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// INIT app
const app = express();

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect mongoose
let db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://NISHITdbms:NISHITdbms@test-cluster-1.btd0a.mongodb.net/Hotel?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true});

//Check connection
db.once('open',function(){
  console.log('Connected to MongoDB');
})

//Check for db errors
db.on('error', function(err){
  console.log(err);
})

// Bring in Models
let Hotel = require('./models/hotel');
let Dining = require('./models/dining');

// Static folder
app.use(express.static('public'));

// Load View Engine

//app.set('view engine', 'ejs');

// Overview Route
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

// Reservation Route
app.post("/reservation", (req, res) => {
  console.log(req.body)
  var myData = new Hotel(req.body);
  myData.save()
    .then(item => {
      console.log(item)
      res.status(200).json("item saved to database");
    })
    .catch(err => {
      console.log(err)
      res.status(400).json("unable to save to database");
    });
});

// Dining Route
app.post("/dining", (req, res) => {
  console.log(req.body)
  var myData = new Dining(req.body);
  myData.save()
    .then(item => {
      console.log(item)
      res.status(200).json("item saved to database");
    })
    .catch(err => {
      console.log(err)
      res.status(400).json("unable to save to database");
    });
});

const port = process.env.PORT || 2000
// Start the server
app.listen(port, () => {
    console.log('Server started on port 2000.....');
});