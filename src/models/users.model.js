// import mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
  roles: {
    type: [String],
    enum: [
      'Admin',
      'User'
    ],
    default: 'User'
  },
  registeredDate: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre('save', async (next) => {
  this.password = await bcrypt.hash(this.password, 8);
  next();
})

userSchema.methods.isValidPass = (password) => {
  return bcrypt.compare(password, this.password);
}

// Creating User Model
const userModel = mongoose.model('users', userSchema);

module.exports = { userModel }