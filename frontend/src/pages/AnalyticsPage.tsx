
import axios from "axios"

import { useEffect, useState } from "react"
import './styles-dashboard.css'
import {Link,Outlet} from 'react-router-dom'
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
        <div className="flex flex-col justify-center gap-4">
            <h3>Analytics Dashboard</h3>
            <nav className="flex justify-center gap-8">
                <Link className ='nav-links' to='./country'>Country</Link>
                <Link className ='nav-links' to = './globe'>Globe</Link>
            </nav>
            <Outlet/>
            {/* <CountryView posts ={posts} /> */}
        </div>
        
    )
}