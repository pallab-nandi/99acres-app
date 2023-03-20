const propertyService = require('../services/properties.service')

async function createProperty(req, res) {
    const property = req.body;
    return await propertyService
      .createProperty(property)
      .then((data) => {
        console.log(data);
        res.setHeader('content-type', 'application/json');
        res.writeHead(200);
        let returnValues = {};
        returnValues.status = 'success';
        returnValues.message = 'Property registered successfully';
        returnValues.data = data;
        res.end(JSON.stringify(returnValues))
      })
  }

  async function fetchProperty(req, res) {
    return await propertyService
      .fetchProperty()
      .then((data) => {
        console.log(data);
        res.setHeader('content-type', 'application/json');
        res.writeHead(200);
        let returnValues = {};
        returnValues.status = 'success';
        returnValues.message = 'All Property fetched successfully';
        returnValues.data = data;
        res.end(JSON.stringify(returnValues))
      })
  }

  module.exports = { createProperty, fetchProperty }