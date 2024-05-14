import SearchComponent from './search/SearchComponent'

import FilterComponent from './location-filter/FilterComponent'

import SortComponent from './sort/SortComponent'
import CuisineFilter from './cuisine_filter/CuisineFIlter'


export default function SearchFilterSortSidebar({ onSearch, onFilterChange, onSortChange, onCuisineFilterChange}) {
    return (
        <div className=' flex flex-col justify-center gap-4 p-10'>
            <h4>Filters</h4>
            <div className='flex flex-wrap items-center gap-2 justify-center'>
                <SearchComponent onSearch={onSearch} />
                {/* filters on location */}
                <FilterComponent onFilterChange={onFilterChange} />
                <CuisineFilter onCuisineFilterChange = {onCuisineFilterChange} />
                <SortComponent onSortChange={onSortChange} />
                
            </div>
        </div>
    )
}