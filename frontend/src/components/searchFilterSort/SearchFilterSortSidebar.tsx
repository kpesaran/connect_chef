import SearchComponent from './search/SearchComponent'

import FilterComponent from './location-filter/FilterComponent'

import SortComponent from './sort/SortComponent'
import CuisineFilter from './cuisine_filter/CuisineFilter';


interface SearchFilterSortSidebarProps {
    onSearch: (val: string) => void;
    onFilterChange: (val: string) => void;
    onSortChange: (val: string) => void;
    onCuisineFilterChange: (val: string) => void;
}


export default function SearchFilterSortSidebar({ onSearch, onFilterChange, onSortChange, onCuisineFilterChange}: SearchFilterSortSidebarProps): JSX.Element {
    return (
        <div className=' flex flex-col justify-center mt-10 border'>
            <h4 className='font-bold'>Filters  / Sort</h4>
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