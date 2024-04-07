const express = require('express')
const axios = require('axios')
require('dotenv').config()


const reverseGeoCode = async (req, res) => {
    const { latitude, longitude } = req.body
    const googleApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.MAPS_API_KEY}`;

    try {
        const response = await axios.get(googleApiUrl);
        const data = response.data 
        console.log(data)
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = reverseGeoCode