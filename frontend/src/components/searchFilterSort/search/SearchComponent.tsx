import { useState } from "react"


export default function SearchComponent({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("")

    function handleSubmit() {
        onSearch(searchTerm)
    }
    return (
        <div className = 'flex gap-1'>
            <input
                type="text"
                placeholder="Search..."
            onChange={(e)=>setSearchTerm(e.target.value)}/>
            <button onClick={handleSubmit}>Go</button>
        </div>
    )
}