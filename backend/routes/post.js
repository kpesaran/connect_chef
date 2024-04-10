const express = require('express')
const router = express.Router()

const { createPost, getAllPosts } = require('../controllers/post')



router.route('/').get(getAllPosts).post(createPost)


module.exports = router