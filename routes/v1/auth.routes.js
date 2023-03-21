// import express
const express = require('express');
const authController = require('../../src/controllers/auth.controller');


// route creating
const router = express.Router();

//signUP
router.post('/signup', authController.signUp);

//login
router.post('/login', authController.login);

module.exports = router;
