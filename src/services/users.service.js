const { userModel } = require('../models/users.model');

class UserService {
  schema;
  constructor() {
    this.schema = userModel;
  }

  createUser(user) {
    return this
      .schema
      .create(user);
  }

  fetchUser() {
    return this
      .schema
      .find()
  }

  updateUser(id, update) {
    return this
      .schema
      .findOneAndUpdate({ _id: id }, update, { returnOriginal: false })
  }

  deleteUser(id) {
    return this
      .schema
      .deleteOne({ _id: id })
  }

}

const userService = new UserService();

module.exports = { userService }