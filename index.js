// import express
const express = require('express');

const { connect } = require('./src/utils/db.connection');

// application initiate
const app = express();




// Server Create
app.listen(8000, () => {
  console.log('Application is running...');
  connect();
})