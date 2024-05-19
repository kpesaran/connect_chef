import { useState } from 'react';
import PieChartCountry from './charts/PieChartCountry';
import BarChartCountry from './charts/BarChartCountry';
import RecipeCount from './stats/RecipeCount';
import MostPopularIngredient from './stats/MostPopularIngredient';

import '../styles.css'
import StepsAvg from './stats/StepsAvg';
import CityWithMostRecipes from './stats/CityWithMostRecipes';

export default function CountryChartsStats({ posts }) {
  const [selectedCountry, setSelectedCountry] = useState('United States');

  let uniqueCountries = [];
  if (posts.length > 0) {
    posts.forEach((post) => {
      if (!uniqueCountries.includes(post.country))
        uniqueCountries.push(post.country);
    });
  }
  return (
    <>
      <label className='font-2xl'>Select Country:</label>
      <select
        name='selectedCountry'
        defaultValue='United States'
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        {uniqueCountries.map((country) => {
          if (country === selectedCountry) {
            return (
              <option selected value={country}>
                {country}
              </option>
            );
          } else {
            return <option value={country}>{country}</option>;
          }
        })}
      </select>

      <div className='charts-container'>
        <div className = "chart-wrapper" >
          <PieChartCountry
            selectedCountry={selectedCountry} posts={posts} />
        </div>
        <div className = "chart-wrapper" >
          <BarChartCountry selectedCountry={selectedCountry} posts={posts} />
        </div>
      </div>
      <div className='stats-container' >
        <RecipeCount posts={posts} selectedCountry={selectedCountry} />
        <MostPopularIngredient posts={posts} selectedCountry={selectedCountry} />
        <StepsAvg selectedCountry={selectedCountry} posts={posts} />
        <CityWithMostRecipes posts={posts} selectedCountry={selectedCountry}/>
      </div>

    </>
  );
}
