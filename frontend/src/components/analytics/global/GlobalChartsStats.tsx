import { useState } from 'react';
import PieChartGlobal from './charts/CuisineCountBarGlobal';
import CuisineCountBarGlobal from './charts/CuisineCountBarGlobal';
import RecipeCount from '../country/stats/RecipeCount';
import MostPopularIngredient from '../country/stats/MostPopularIngredient';
import StepsAvg from '../country/stats/StepsAvg';
import CityWithMostRecipes from '../country/stats/CityWithMostRecipes';

import '../styles.css';
import RecipeCountByCountryBar from './charts/RecipeCountByCountryBar';
import BarChartCountry from '../country/charts/BarChartCountry';

export default function GlobalChartsStats({ posts }) {
  return (
    <div className='flex flex-col'>
     
      <div className='charts-container'>
        <div className='chart-wrapper-globe'>
          <CuisineCountBarGlobal posts={posts} />
        </div>
        <div className='chart-wrapper-globe'>
                  <RecipeCountByCountryBar posts={posts} />
                  
              </div>
              <div className='chart-wrapper-globe'>
                  <BarChartCountry posts={posts} selectedCountry={null}/>
              </div>
          </div>
          <div className='stats-container'>
        <RecipeCount posts={posts} selectedCountry={null} />
        <MostPopularIngredient posts={posts} selectedCountry={null} />
        <StepsAvg selectedCountry={null} posts={posts} />
        <CityWithMostRecipes posts={posts} selectedCountry={null} />
      </div>
    </div>
  );
}
