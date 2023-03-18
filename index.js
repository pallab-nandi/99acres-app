// import express
const express = require('express');
const bodyParser = require('body-parser');

const { connect } = require('./src/utils/db.connection');

// application initiate
const app = express();

app.use(bodyParser.json());

require('./routes/index.routes')(app);

app.get('/', (req, res) => {
  res.send('Hello World');
})

// Server Create
app.listen(8000, () => {
  console.log('Application is running...');
  connect();
})