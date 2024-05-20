const { images, tacos, pizza } = require('./image-urls')

require('dotenv').config()


const connectDB = require('./db/connect')
const Product = require('./models/postSchema')

const posts = require('./posts.json')

for (let i = 0; i < posts.length; i++) {
  imageIndex = i % tacos.length
  if (posts[i].picUrl === '' && posts[i].title.includes('Tacos')){
    posts[i].picUrl = tacos[imageIndex]
  }
  
}

for (let i = 0; i < posts.length; i++) {
  imageIndex = i % pizza.length
  if (posts[i].picUrl === '' && posts[i].title.includes('Pizza')){
    posts[i].picUrl = pizza[imageIndex]
  }
  
}



for (let i = 0; i < posts.length; i++) {
  imageIndex = i % images.length
  if (posts[i].picUrl === '') {
    posts[i].picUrl = images[imageIndex]
  }
  
}


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    await Product.deleteMany()
    await Product.create(posts)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()