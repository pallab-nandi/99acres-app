// import express
const express = require('express');


// route creating
const router = express.Router();

// property CRUD operations - CRUD -> Create Read Update Delete
// fetch all properties
router.get('/all', (req, res) => {
  res.send('property GET working')
});

// create a property
router.post('/create', (req, res) => {
  res.send('property POST working')
});

// update a property
router.put('/update', (req, res) => {
  res.send('property PUT working')
});

// delete a property
router.delete('/delete', (req, res) => {
  res.send('property DELETE working')
});

module.exports = router;
