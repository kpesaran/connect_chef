const express = require('express')
const router = express.Router()

const { createPost, getAllPosts, deletePost } = require('../controllers/post')



router.route('/').get(getAllPosts).post(createPost).delete(deletePost)


module.exports = router