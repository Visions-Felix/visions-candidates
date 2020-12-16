const Service = require("../Models/Service.model")
const DataType = require("../Models/DataType.model")
const Purpose = require("../Models/Purpose.model")

exports.allServiceDatatypes = async (req, res, next) => {
    let datatypes = await DataType.find({provenance: req.body.serviceId})
    res.json(datatypes)
}