const jwt = require('jsonwebtoken')


const auth = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log('hi')
        return res.status(401).json({msg: 'Authentication Invalid'})
    }
    const token = authHeader.split(' ')[1]
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = { userId: payload.userId, name: payload.name }
        next()
    }
    catch (err) {
        return res.status(401).json({msg: 'Authentication Invalid', error: err})
    }
}

module.exports = auth