const { userService } = require('../services/users.service');

async function fetchUser(req, res) {
  return await userService
    .fetchUser()
    .then((data) => {
      console.log(data);
      res.setHeader('content-type', 'application/json');
      res.writeHead(200);
      let returnValues = {};
      returnValues.status = 'success';
      returnValues.message = 'All users fetched successfully';
      returnValues.data = data;
      res.end(JSON.stringify(returnValues))
    })
}

async function createUser(req, res) {
  const user = req.body;
  return await userService
    .createUser(user)
    .then((data) => {
      console.log(data);
      res.setHeader('content-type', 'application/json');
      res.writeHead(200);
      let returnValues = {};
      returnValues.status = 'success';
      returnValues.message = 'User registered successfully';
      returnValues.data = data;
      res.end(JSON.stringify(returnValues))
    })
}

async function updateUser(req, res) {
  const update = req.body;
  const id = req.params.id;
  return await userService
    .updateUser(id, update)
    .then((data) => {
      console.log(data);
      res.setHeader('content-type', 'application/json');
      res.writeHead(200);
      let returnValues = {};
      returnValues.status = 'success';
      returnValues.message = 'User registered successfully';
      returnValues.data = data;
      res.end(JSON.stringify(returnValues))
    })
}

async function deleteUser(req, res) {
  const id = req.params.id;
  return await userService
    .deleteUser(id)
    .then((data) => {
      console.log(data);
      res.setHeader('content-type', 'application/json');
      res.writeHead(200);
      let returnValues = {};
      returnValues.status = 'success';
      returnValues.message = 'User registered successfully';
      returnValues.data = data;
      res.end(JSON.stringify(returnValues))
    })
}

module.exports = { fetchUser, createUser, updateUser, deleteUser }