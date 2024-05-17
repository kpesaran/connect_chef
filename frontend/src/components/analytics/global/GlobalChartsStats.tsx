import { useState } from 'react';
import PieChartGlobal from './charts/CuisineCountBarGlobal';
import CuisineCountBarGlobal from './charts/CuisineCountBarGlobal';
import RecipeCount from '../country/stats/RecipeCount';
import MostPopularIngredient from '../country/stats/MostPopularIngredient';



// import './styles.css'

export default function GlobalChartsStats({ posts }) {
  

  return (
    <>
      <div className='charts-containr'>
        <div className = "chart-wraper" >
          <CuisineCountBarGlobal
             posts={posts} />
        </div>
      </div>
          <div className='global-stat-container'>
              <RecipeCount posts={posts} selectedCountry={null} />
              <MostPopularIngredient posts={posts} selectedCountry={null}/>
      </div>
    
    </>
  );
}
