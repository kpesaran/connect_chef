import SearchComponent from './search/SearchComponent'

import FilterComponent from './location-filter/FilterComponent'

import SortComponent from './sort/SortComponent'
import CuisineFilter from './cuisine_filter/CuisineFIlter'
import './styles.css'

export default function SearchFilterSortSidebar({ onSearch, onFilterChange, onSortChange, onCuisineFilterChange}) {
    return (
        <div className=' flex flex-col justify-center mt-10 border'>
            <h4>Filters</h4>
            <div className='flex flex-wrap items-center gap-4 justify-center'>
                <div className=' filter-bar-components '>
                    <SearchComponent onSearch={onSearch} />
                </div>
                {/* filters on location */}
                <div className='filter-bar-components'>
                    <FilterComponent onFilterChange={onFilterChange} />
                </div>
                <div className='filter-bar-components'>
                    <CuisineFilter onCuisineFilterChange = {onCuisineFilterChange} />
                </div>
                <div className='filter-bar-components'>
                    <SortComponent onSortChange={onSortChange} />
                    
                </div>
            </div>
        </div>
    )
}