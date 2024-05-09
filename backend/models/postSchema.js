const mongoose = require('mongoose')

const ingredientSchema = new mongoose.Schema({name: {type: String}, quantity: {type: String}})

const postSchema = new mongoose.Schema({  
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    steps: {
        type: [String]
    },
    // change to connect to user 
    // author: {
    //     type: String,
    //     // required: true,
    //     // unique: true
    // },
    // add comments later
    ingredients: 
        [ingredientSchema]
    ,
    dateStamp: {
        type: Date,
        default: Date.now()
    },
    category: [{type: String}]
        
    ,
    views: {
        type: Number,
        default: 0
    },
    
    neighborhood: {
        type: String
    } ,
    city: {
        type: String
  }, 
    county: {
        type: String
  },
    state: {
        type: String
    },
  
    country: {
        type: String
  },

    zipcode: {
        type: String,
        // required: [true, "Zipcode must be provided"]
    },
    lat: {
        type: Number
    },
    lng: {
        type: Number
    },
    picUrl: {
        type:String 
    },

})

module.exports = mongoose.model('Posting', postSchema)