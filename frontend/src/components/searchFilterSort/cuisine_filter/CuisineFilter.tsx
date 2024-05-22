import { useState } from "react";

interface CuisineFilterProps {
    onCuisineFilterChange: (val: string) => void
}

const cuisineOptions = [
    'All','French', 'Indian', 'Japanese', 'Thai', 'Italian', 'American',
    'Mexican', 'Chinese', 'Spanish', 'Lebanese', 'Turkish', 
    'Greek', 'Vietnamese', 'Korean', 'Brazilian', 'Ethiopian',
    'Peruvian', 'Portuguese', 'Moroccan', 'Russian', 
    'Cuban', 'Malaysian', 'Irish', 'Indonesian', 'Polish',
];

  

export default function CuisineFilter({onCuisineFilterChange}: CuisineFilterProps): JSX.Element {
    const [cuisineVal, setCuisineVal ] = useState('')
   
    function handleCuisineFilterChange(val:string) {
        
        setCuisineVal(val)
        onCuisineFilterChange(val)
    }

    return (
        <div><h3>Filter By Cuisine</h3>
        <select
          value={cuisineVal}
          onChange={(e) => handleCuisineFilterChange(e.target.value)}
        >
                {cuisineOptions.map((cuisine, i) => (
                    <option
                        key = {i}
                        value={cuisine}>{cuisine}</option>
                ))}
        </select></div>
    )
}