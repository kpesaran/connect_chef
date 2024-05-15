import { useState } from "react"
import PieChartCountry from "./PieChartCountry"

export default function CountryView({posts}) {
    const [selectedCountry, setSelectedCountry] = useState('United States')

    let uniqueCountries = []
    if (posts.length > 0) {
        posts.forEach(post => {
            if (!uniqueCountries.includes(post.country))
                uniqueCountries.push(post.country)
        })
    }
    return (<>
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
               
            </div></>)
}