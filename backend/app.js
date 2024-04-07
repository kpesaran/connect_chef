require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')


const connectDB = require('./db/connect')
const locations = require('./routes/locations')
const reverseGeoCode = require('./routes/reverse-geocode')
const routeNotFoundMW = require('./middleware/route-not-found')

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Testing backend')
})




// Update before depoloying
app.use(cors({origin: process.env.LOCAL_HOST_URL}))
app.use('/api/v1/locations', locations )

app.use('/api/v1/reverse-geocode', reverseGeoCode)


app.use(routeNotFoundMW)

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