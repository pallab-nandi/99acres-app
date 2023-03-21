const { propertyModel } = require("../models/properties.model")

class PropertyService {
  schema;
  constructor() {
    this.schema = propertyModel
  }

  //create property
  createProperty(property) {
    return this.schema.create(property)
  }

  //fetch property
  fetchProperty() {
    return this.schema.find()
  }

  updateProperty(id, update) {
    return this
      .schema
      .findOneAndUpdate({ _id: id }, update, { returnOriginal: false })
  }

  deleteProperty(id) {
    return this
      .schema
      .deleteOne({ _id: id })
  }

}

const propertyService = new PropertyService();

module.exports = { propertyService }