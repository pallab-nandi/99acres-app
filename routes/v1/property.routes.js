// import express
const express = require('express');


// route creating
const router = express.Router();
const propertyController = require('../../src/controllers/properties.controller')

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
router.put('/:id/update', propertyController.updateProperty);

// delete a property
router.delete('/delete', propertyController.deleteProperty);

module.exports = router;
