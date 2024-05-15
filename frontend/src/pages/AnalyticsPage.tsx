
import axios from "axios"

import { useEffect, useState } from "react"
import PieChart from "../components/analytics/country/charts/PieChartCountry"
import PieChartCountry from "../components/analytics/country/charts/PieChartCountry"
import './styles-dashboard.css'
import CountryView from "../components/analytics/country/charts/CountryView"

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
            <div>Analytics Dashboard</div>
            {/* <nav>
                <Link to='country'>Country</Link>
                <Link to = 'globe'>Globe</Link>
            </nav>
            <Outlet/> */}
            <CountryView posts ={posts} />
        </div>
        
    )
}