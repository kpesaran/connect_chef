const reverseGeoCode = require('../controllers/reverse-geocode')

const express = require('express')
const router = express.Router()


router.route('/').post(reverseGeoCode)

module.exports = reverseGeoCode