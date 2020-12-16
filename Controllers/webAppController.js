const Service = require("../Models/Service.model")
const DataType = require("../Models/DataType.model")

/**
 * displayPurposes
 *
 * Copyright 2020 Visions
 * Original Authors: Felix Bole
 * Created Date: 11/12/2020
 * Date Updated: ~
 *
 * Displays a list of a service's purposes and its details
 */
exports.displayPurposes = async (req, res, next) => {
    // Coder la logique de cette fonction pour afficher convenablement la page des traitements
    try {
        res.render("purposes", {
            serviceId: req.body.serviceId,
            serviceName: req.body.serviceName,
            datauses: []
        });
    } catch (err) {
        next(err)
    }
}