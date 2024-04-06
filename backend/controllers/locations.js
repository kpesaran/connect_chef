const Locations = require('../models/locations')

const getAllLocations = async (req, res) => {
    const allLocations = await Locations.find({})
    res.status(200).json({allLocations, nbLocations: allLocations.length})
}

const createLocation = async (req, res) => {
    try {
        const location = await Locations.create(req.body)
        res.status(201).json({location})
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = {createLocation, getAllLocations}