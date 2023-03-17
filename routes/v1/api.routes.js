//import express
const express = require('express');

const router = express.Router();

const userRoute = require('./user.routes');
const propertyRoute = require('./property.routes');

router.use('/users', userRoute);
router.use('/property', propertyRoute);

module.exports = router;