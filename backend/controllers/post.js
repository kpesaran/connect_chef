const PostSchema = require('../models/postSchema')

const express = require('express')


const getAllPosts = async (req, res) => {
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
        const newPost = await PostSchema.create(req.body)
        res.status(201).json(newPost)
    }
    catch (err) {
        console.log(err)
        // res.status(404).send(`error: ${err} `)
    }
}

module.exports = {createPost, getAllPosts}




