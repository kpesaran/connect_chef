import '../styles.css'

interface onSearchProp {
    onSearch: (value:string) => void
}

export default function SearchComponent({ onSearch }:onSearchProp): JSX.Element {
    
    return (
        <div className = 'flex gap-1'>
            <input className="search-bar"
                type="text"
                placeholder="Search..."
            onChange={(e)=>onSearch(e.target.value)}/>
            
        </div>
    )
}