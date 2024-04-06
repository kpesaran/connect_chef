require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const locations = require('./routes/locations')

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Testing backend')
})

// app.post('/', (req, res) => {
    
// })

app.use('/api/v1/locations', locations )

const port = 3001

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`server is on port ${port}...`)
        })
    }
    catch (error) {
        console.log(error)
    }
}

start()