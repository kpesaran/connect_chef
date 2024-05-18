const PostSchema = require('../models/postSchema')

const express = require('express')


const getAllPosts = async (req, res) => {
    // If you had a user profile page, you would pass a filter to only display posts associated with user in req.user.userId
    // const posts = await Job.find({createdBy: req.user.userId}).sort('createdAt')
    console.log(req.query)
    const {sort, category, neighborhood, city, state, country} = req.query
    const queryObj = {}
    const sortObj = {}
    if (sort) {
        const [field, order] = sort.split(':')
        sortObj[field] = order === 'desc' ? -1 : 1
    }
    else {
        sortObj.dateStamp = -1
    }
    if (category) {
        queryObj.category = category
    }
    if (neighborhood) {
        queryObj.neighborhood = neighborhood
    }
    if (city) {
        queryObj.city = city
    }
    if (state) {
        queryObj.state = state
    }
    if (country) {
        queryObj.country = country
    }
    


    try {
        const allPosts = await PostSchema.find(
        queryObj).sort(sortObj)
        res.status(201).json(allPosts)
    }
    catch (err) {
        console.error(err)
        
    }
}


const createPost = async (req, res) => {
    try {

        req.body.createdBy = req.user.userId
        const newPost = await PostSchema.create(req.body)
        res.status(201).json(newPost)
    }
    catch (err) {
        console.log(err)
        res.status(404).send(`error: ${err} `)
    }
}

const deletePost = async (req, res) => {
    const {postId} = req.body
    const task = await PostSchema.findOneAndDelete({ _id: postId })
    try {
        if (!task) {
            return res.status(404).json({ msg: `no task with ${postId}` })
        }
        res.status(200).json({ msg: 'deleted post successfully' })
    }
    catch (err) {
        console.error('Error deleting post:', err)
        res.status(500).json({ error: 'An error occurred while deleting the post' });
    }
}

module.exports = {createPost, getAllPosts, deletePost}




