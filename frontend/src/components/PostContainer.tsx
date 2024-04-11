import React, { useEffect, useState } from "react"

import axios from "axios"

interface PostProps {
    post: {
      id: number; 
        title: string; 
    body: string,
        category: string,
        neighborhood: string,
        city: string
    };
  }
const Post: React.FC<PostProps> = ({ post })=> {
    return (
        <div>
            {post.title}
            {post.body}
            {post.category}
            {post.neighborhood}
            {post.city}
        </div>
    )
}

const PostContainer: React.FC = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const endpoint = 'http://localhost:3001/api/v1/postings'
                
                const response = await axios.get(endpoint)
                console.log(response.data)
                setPosts(response.data)
            }
            catch (error) {
                console.error("failed to get posts:" ,error)
            }
        }
        fetchData();
    },[])

    return (
        <div>
            {posts.map((post,i) => (
                <Post key={i} post = {post} />
            ))}
        </div>
        )
}

export default PostContainer