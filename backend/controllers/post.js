const PostSchema = require('../models/postSchema')

const express = require('express')


const getAllPosts = async (req, res) => {
    try {
        const allPosts = await PostSchema.find({})
        res.status(201).json(allPosts)
    }
    catch (err) {
        console.err(err)
        
    }
}


const createPost = async (req, res) => {
    try {
        const newPost = await PostSchema.create(req.body)
        res.status(201).json(newPost)
    }
    catch (err) {
        console.log(err)
        // res.status(404).send(`error: ${err} `)
    }
}

module.exports = {createPost, getAllPosts}




