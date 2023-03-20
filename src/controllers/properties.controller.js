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

async function updateProperty(req, res){
    const property= req.body;
    const pid= req.params.id
    return await propertyService
    .updateProperty(pid, property)
    .then((data)=>{
        console.log(data);
        res.setHeader('content-type', 'application/json');
        res.writeHead(200);
        let returnValues={};
        returnValues.status = 'success';
        returnValues.message = 'Property Updated Successfully';
        returnValues.data = data;
        res.end(JSON.stringify(returnValues))
    })
}

async function deleteProperty(req, res){
    const pid= req.params.id
    return await propertyService
    .deleteProperty(pid)
    .then(()=>{
        console.log('Property Deleted')
        res.writeHead(200);
        let returnValues={};
        returnValues.status='success';
        returnValues.message='Property Deleted Successfully';
        res.end(JSON.stringify(returnValues))
    })
}

module.exports = {createProperty, fetchProperty, updateProperty, deleteProperty}
