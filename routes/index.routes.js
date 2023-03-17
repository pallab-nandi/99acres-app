const apiRoutes = require('./v1/api.routes');

module.exports = (app) => {
  app.use('/api/v1', apiRoutes)
}