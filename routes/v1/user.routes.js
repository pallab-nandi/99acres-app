// import express
const express = require('express');
const userController = require('../../src/controllers/users.controller');


// route creating
const router = express.Router();

// User CRUD operations - CRUD -> Create Read Update Delete
// fetch all users
router.get('/all', userController.fetchUser);

// create a user
router.post('/create', userController.createUser);

// update a user
router.put('/:id/update', userController.updateUser);

// delete a user
router.delete('/:id/delete', userController.deleteUser);

module.exports = router;
