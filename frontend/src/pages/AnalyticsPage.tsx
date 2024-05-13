
import axios from "axios"

import { useEffect, useState } from "react"
import PieChart from "../components/charts/PieChartCountry"
import PieChartCountry from "../components/charts/PieChartCountry"
import './styles-dashboard.css'


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
    const [selectedCountry, setSelectedCountry] = useState('United States')

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

    return (
        <div>
            <div>Analytics Page</div>
            <select name='selectedCountry' defaultValue="United States"
            onChange={(e)=>setSelectedCountry(e.target.value)}>
                {uniqueCountries.map((country) => {
                    if (country === selectedCountry) {
                        return <option selected value={country} >{country}</option>
                    }
                    else {
                    
                   
                    return (

                   
                  <option value={country} >{country}</option>
                ) }
                    
                })}
            </select>

            <div className="chart-container">
                <PieChartCountry selectedCountry = {selectedCountry} posts = {posts} />
               
            </div>
        </div>
        
    )
}