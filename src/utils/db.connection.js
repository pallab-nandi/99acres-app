// import mongoose
const mongoose = require('mongoose');



// connecting database
const connect = () => {
  console.log('Initializing Database Connection');
  mongoose.connect('mongodb+srv://pallab-nandi:root@99acres-app.sa8of2n.mongodb.net/99acres-app')
    .then(() => {
      console.log('Database connected successfully');
    })
    .catch((err) => {
      console.log('Error while connecting database', err);
    })
}


// exporting connect function
module.exports = { connect }