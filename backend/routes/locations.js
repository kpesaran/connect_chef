const express = require('express')
const router = express.Router()

const { getAllLocations, createLocation } = require('../controllers/locations')


router.route('/').get(getAllLocations).post(createLocation)


module.exports = router