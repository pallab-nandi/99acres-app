if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  dev: 'mongodb://127.0.0.1:27017/99acres-app',
  prod: process.env.DB_URI
}