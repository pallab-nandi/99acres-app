// import mongoose
const mongoose = require('mongoose');

// import DB Config
const dbConfig = require('../configs/db.config');

// mongodb::127.0.0.1/db

// connecting database
const connect = () => {
  console.log('Initializing Database Connection');
  mongoose.connect(dbConfig.prod)
    .then(() => {
      console.log('Database connected successfully');
    })
    .catch((err) => {
      console.log('Error while connecting database', err);
    })
}


// exporting connect function
module.exports = { connect }