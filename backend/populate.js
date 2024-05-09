const images = require('./image-urls')

require('dotenv').config()


const connectDB = require('./db/connect')
const Product = require('./models/postSchema')

const posts = require('./posts.json')

for (let i = 0; i < posts.length; i++) {
  imageIndex = i % images.length
  posts[i].picUrl = images[imageIndex]
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