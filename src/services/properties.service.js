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

  updateProperty(name, update) {
    return this
      .schema
      .findOneAndUpdate(name, update, { returnOriginal: false })
  }

  deleteProperty(name) {
    return this
      .schema
      .deleteOne(name)
  }

}

const propertyService = new PropertyService();

module.exports = { propertyService }