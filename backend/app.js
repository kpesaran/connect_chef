require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

const authenticateUser = require('./middleware/authentication')
const routeNotFoundMW = require('./middleware/route-not-found')
const connectDB = require('./db/connect')


const authRouter = require('./routes/auth')
const locations = require('./routes/locations')
const reverseGeoCode = require('./routes/reverse-geocode')
const postings = require('./routes/post')


app.use(express.json())



app.get('/', (req, res) => {
    res.send('Testing backend')
})


app.use(cors())
//testing frontend and backend requests/responses
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/locations', locations )
// testing reverse geocoding based on current location
app.use('/api/v1/reverse-geocode', reverseGeoCode)
//main post form
app.use('/api/v1/postings', authenticateUser, postings)


app.use


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