const User = require('../models/userSchema')
const { StatusCodes } = require('http-status-codes')
const bcrypt = require('bcryptjs')



const register = async (req, res) => {
    const { name, email, password } = req.body
    const salt = await bcrypt.genSalt()
    const hashedpw = await bcrypt.hash(password, salt)

    tmpUsr = { name, email, password: hashedpw }
    const user = await User.create(tmpUsr)

    res.status(201).json({ user })
}


const login = async (req, res) => {
    res.send('login user')
}


module.exports = {
    register,
    login
}