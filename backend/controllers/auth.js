const User = require('../models/userSchema')
const { StatusCodes } = require('http-status-codes')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const register = async (req, res) => {
    const { name, email, password } = req.body
    const salt = await bcrypt.genSalt()
    const hashedpw = await bcrypt.hash(password, salt)

    tmpUsr = { name, email, password: hashedpw }
    const user = await User.create(tmpUsr)

    const token = user.createJWT()
    
    res.status(201).json({ user: { name: user.name },token})
}


const login = async (req, res) => {
    
    const { email, password } = req.body 
    
    if (!email || !password) {
        console.log('bad request, either username or password not provided')
        return res.status(400).json({msg: 'bad request, either username or password not provided' })
        
    }
    const user = await User.findOne({email})
    if (!user) {
        console.log('Invalid Credentials')
        return res.status(401).json({msg: 'bad request, invalid credentials '})
    }
    const isPasswordCorrect = await user.checkPassword(password)

    if (!isPasswordCorrect) {
        console.log('Invalid Credentials')
        return res.status(401).json({ msg: 'Invalid Credentials' })

    }

    const token = user.createJWT()
    res.status(200).json({user: {name:user.name}, token})
}   


module.exports = {
    register,
    login
}