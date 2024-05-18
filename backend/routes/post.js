const express = require('express')
const router = express.Router()

const { createPost, getAllPosts, deletePost, updateViewCountPost } = require('../controllers/post')



router.route('/').get(getAllPosts).post(createPost).delete(deletePost)

router.route('/:id').patch(updateViewCountPost)



module.exports = router