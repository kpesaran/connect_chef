
import axios from "axios"

import { useEffect, useState } from "react"


const fetchPostsData = async () => {
    
        try {
            const endpoint = `http://localhost:3001/api/v1/postings?`
            const response = await axios.get(endpoint)
            return response.data
        }
        catch (err) {
            throw new Error('failed to fetch posts')
        }
}

export default function AnalyticsPage() {
    const [posts, setPosts] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('')

    let uniqueCountries = []
    if (posts.length > 0) {
        posts.forEach(post => {
            if (!uniqueCountries.includes(post.country))
                uniqueCountries.push(post.country)
        })
    }
    

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
    console.log(selectedCountry)
    return (
        <div>
            <div>Analytics Page</div>
            <select name='selectedCountry' defaultValue="United States"
            onChange={(e)=>setSelectedCountry(e.target.value)}>
                {uniqueCountries.map((country) => (
                    <option value={country} >{country}</option>
                ))}
            </select>

            {posts.map((post) => (
                <div key={post._id}>{post.title}</div>
            ))}
        </div>
        
    )
}