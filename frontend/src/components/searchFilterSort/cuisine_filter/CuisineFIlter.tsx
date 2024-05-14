import { useState } from "react";


const cuisineOptions = [
    'French', 'Indian', 'Japanese', 'Thai', 'Italian', 'American',
    'Mexican', 'Chinese', 'Spanish', 'Lebanese', 'Turkish', 
    'Greek', 'Vietnamese', 'Korean', 'Brazilian', 'Ethiopian',
    'Peruvian', 'Portuguese', 'Moroccan', 'Russian', 
    'Cuban', 'Malaysian', 'Irish', 'Indonesian', 'Polish'
];

  

export default function CuisineFilter({onCuisineFilterChange}) {
    const [cuisineVal, setCuisineVal ] = useState('')
   
    function handleCuisineFilterChange(val) {
        setCuisineVal(val)
        onCuisineFilterChange(val)
    }

    return (
        <div><h3>Filter By Cuisine</h3>
        <select
          value={cuisineVal}
          onChange={(e) => handleCuisineFilterChange(e.target.value)}
        >
                {cuisineOptions.map((cuisine) => (
                    <option value = {cuisine}>{cuisine}</option>
                ))}
        </select></div>
    )
}