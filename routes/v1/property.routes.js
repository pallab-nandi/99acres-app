// import express
const express = require('express');
const propertyController = require('../../src/controllers/Property.controller')


// route creating
const router = express.Router();

// property CRUD operations - CRUD -> Create Read Update Delete
// fetch all properties
router.get('/all', propertyController.fetchProperty);

// create a property
router.post('/create', propertyController.createProperty);

// update a property
router.put('/update', (req, res) => {
  res.send('property PUT working')
});

// delete a property
router.delete('/delete', (req, res) => {
  res.send('property DELETE working')
});

module.exports = router;
