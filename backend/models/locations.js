const mongoose = require('mongoose')


const locationSchema = new mongoose.Schema({
    zipcode: {
        type: Number || String,
        // required: [true, "Zipcode must be provided"]
    },
    dateStamp: {
        type: Date,
        default: Date.now()
    }
})

// const postSchema = n

module.exports = mongoose.model('Location', locationSchema)