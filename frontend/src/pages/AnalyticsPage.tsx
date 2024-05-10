
import axios from "axios"
import { resolve } from "path"
import { useEffect, useState } from "react"


const  fetchPostsData = async () => {
    
    try {
        const endpoint = `http://localhost:3001/api/v1/postings?`

        const response = await axios.get(endpoint)
        console.log(response.data)
    }
    catch (err) {

        console.error(err)
    }
    
}


export default function AnalyticsPage() {
    const [posts, setPosts] = useState([])

    useEffect(() => {

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