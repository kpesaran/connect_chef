
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement)

import { countOccurences } from '../../country/utils'



export default function RecipeCountByCountryBar({ posts }) {
    
    const countries = []
    posts.forEach(post => {
            countries.push(post.country)
    })

    const countryRecipeCount = countOccurences(countries)
     
    const labels = Object.keys(countryRecipeCount)
    const dataCountryCount  = Object.values(countryRecipeCount)

    console.log(countryRecipeCount)

    const data = {
        labels: labels,
        datasets: [
          {
            label: 'Recipe Count',
            data: dataCountryCount,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
          indexAxis: 'y', 
          scales: {
            x: {
                ticks: {
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 24,
                        weight: 'bold'
                    }
                }
            }
        }
      };
    
    return <div>
          <h4 className='chart-title'>Recipe Count By Country </h4>
          <Bar data={data} options={options} height={300} />
      </div>;


}