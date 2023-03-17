// import express
const express = require('express');


// route creating
const router = express.Router();

// User CRUD operations - CRUD -> Create Read Update Delete
// fetch all users
router.get('/all', (req, res) => {
  res.send('user GET working')
});

// create a user
router.post('/create', (req, res) => {
  res.send('user POST working')
});

// update a user
router.put('/update', (req, res) => {
  res.send('user PUT working')
});

// delete a user
router.delete('/delete', (req, res) => {
  res.send('user DELETE working')
});

module.exports = router;
