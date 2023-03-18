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

  updateUser(name, update) {
    return this
      .schema
      .findOneAndUpdate(name, update, { returnOriginal: false })
  }

  deleteUser(name) {
    return this
      .schema
      .deleteOne(name)
  }

}

const userService = new UserService();

module.exports = { userService }