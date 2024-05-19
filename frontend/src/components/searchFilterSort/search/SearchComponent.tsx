import { useState } from "react"
import '../styles.css'

export default function SearchComponent({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("")

    
    return (
        <div className = 'flex gap-1'>
            <input className="search-bar"
                type="text"
                placeholder="Search..."
            onChange={(e)=>onSearch(e.target.value)}/>
            
        </div>
    )
}