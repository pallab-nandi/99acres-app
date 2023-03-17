// import mongoose
const mongoose = require('mongoose');

// user schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add your First Name']
  },
  lastName: {
    type: String,
    required: [true, 'Please add your Last Name']
  },
  email: {
    type: String,
    required: [true, 'Please Enter your email-id'],
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number
  },
  ownPropertyType: {
    type: String,
    enum: [
      'Rent',
      'Own',
      'None'
    ],
    default: 'None'
  },
  registeredDate: {
    type: Date,
    default: Date.now
  }
});


// Creating User Model
const userModel = mongoose.model('users', userSchema);

module.exports = { userModel }