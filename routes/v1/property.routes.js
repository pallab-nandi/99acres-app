// import express
const express = require('express');
const propertyController = require('../../src/controllers/properties.controller')


// route creating
const router = express.Router();
const propertyController = require('../../src/controllers/properties.controller')

// property CRUD operations - CRUD -> Create Read Update Delete
// fetch all properties
router.get('/all', propertyController.fetchProperty);

// create a property
router.post('/create', propertyController.createProperty);

// update a property
router.put('/:id/update', propertyController.updateProperty);

// delete a property
router.delete('/:id/delete', propertyController.deleteProperty);

module.exports = router;
