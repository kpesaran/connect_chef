
import axios from "axios"

import { useEffect, useState } from "react"


const fetchPostsData = async () => {
    
        try {
            const endpoint = `http://localhost:3001/api/v1/postings?`
            const response = await axios.get(endpoint)
            console.log(response.data)
            return response.data
        }
        catch (err) {
            throw new Error('failed to fetch posts')
        }
}

export default function AnalyticsPage() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedPosts = await fetchPostsData()
                setPosts(fetchedPosts)
            }
            catch (err) {
                console.error(err)
            }
        }
        fetchData()
        
    },[])

    return (
        <div>
            <div>Analytics Page</div>
            {posts.map((post) => (
                <div key={post._id}>{post.title}</div>
            ))}
        </div>
        
    )
}