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
}

const propertyService = new PropertyService();

module.exports = { propertyService }