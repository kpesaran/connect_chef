import { useState } from 'react';
import PieChartCountry from './charts/PieChartCountry';
import BarChartCountry from './charts/BarChartCountry';
import RecipeCount from './stats/RecipeCount';
import MostPopularIngredient from './stats/MostPopularIngredient';

import '../styles.css'
import StepsAvg from './stats/StepsAvg';
import CityWithMostRecipes from './stats/CityWithMostRecipes';
import type {Post} from '../../../interfaces'

interface CountryChartsStatsProp {
  posts: Post[]
}


export default function CountryChartsStats({ posts }:CountryChartsStatsProp):JSX.Element {
  const [selectedCountry, setSelectedCountry] = useState<string>('United States');

  const uniqueCountries:string[] = [];
  if (posts.length > 0) {
    posts.forEach((post) => {
      if (!uniqueCountries.includes(post.country))
        uniqueCountries.push(post.country);
    });
  }
  return (
    <>
      
      <label className='text-2xl'>Select A Different Country:</label>
      <select
        name='selectedCountry'
        defaultValue='United States'
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        {uniqueCountries.map((country) => {
          if (country === selectedCountry) {
            return (
              <option key = {country} selected value={country}>
                {country}
              </option>
            );
          } else {
            return <option key = {country} value={country}>{country}</option>;
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
      <h5 className='text-2xl mt-6'>Country: { selectedCountry}</h5>
      <div className='stats-container' >
        <RecipeCount posts={posts} selectedCountry={selectedCountry} />
        <MostPopularIngredient posts={posts} selectedCountry={selectedCountry} />
        <StepsAvg selectedCountry={selectedCountry} posts={posts} />
        <CityWithMostRecipes posts={posts} selectedCountry={selectedCountry}/>
      </div>

    </>
  );
}
