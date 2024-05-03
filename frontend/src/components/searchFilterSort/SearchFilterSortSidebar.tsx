import SearchComponent from './search/SearchComponent'

import FilterComponent from './filter/FilterComponent'

// import SortComponent from './sort/SortComponent'


export default function SearchFilterSortSidebar({ onSearch, onFilterChange}) {
    return (
        <div className='p-10'>
            <h4>Filters</h4>
            <div className=''>
                <SearchComponent onSearch={onSearch} />
                <FilterComponent onFilterChange={onFilterChange} />
                {/* <SortComponent onSortChange = {onSortChange}/> */}
            </div>
        </div>
    )
}