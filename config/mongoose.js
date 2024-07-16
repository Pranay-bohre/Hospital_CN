require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the db'));
db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;
