import {Chart as ChartJS, CategoryScale, LinearScale, BarElement} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement)



export default function BarChartCountry({ posts, selectedCountry }) {
    const filteredPostsByCountry = posts
    .filter((post) => post.country === selectedCountry).filter((post)=>post.category.every(cuisine => cuisine !== ""))
    
    console.log(posts)
    console.log(filteredPostsByCountry)

    const cuisineIngredientCount = {}
    filteredPostsByCountry.forEach(post => {
        post.category.forEach(cuisine => {
            if (!cuisineIngredientCount[cuisine]) {
                cuisineIngredientCount[cuisine] = []
            }
            cuisineIngredientCount[cuisine].push(post.ingredients.length)
        })
    });

    console.log(cuisineIngredientCount)
    
    const labels = Object.keys(cuisineIngredientCount)

    const averageCountIngredients = Object.values(cuisineIngredientCount).map(sublist => {
        let sum = 0;
        for (let i = 0; i < sublist.length; i++) {
            sum += sublist[i]
        }
        return Math.round(sum / sublist.length*100)/100
    })

    const cuisineStepCount = {}
    
    filteredPostsByCountry.forEach(post => {
        post.category.forEach(cuisine => {
            if (!cuisineStepCount[cuisine]) {
                cuisineStepCount[cuisine] = []
            }
            cuisineStepCount[cuisine].push(post.steps.length)
        }) 
    })

    const averageCountSteps = Object.values(cuisineStepCount).map(sublist => {
        let sum = 0;
        for (let i = 0; i < sublist.length; i++) {
            sum += sublist[i]
        }
        return Math.round(sum / sublist.length*100)/100
    })

    

    console.log(averageCountIngredients)









    ;
    const data = {
        labels: labels,
        datasets: [{
            label: 'Average Number of Ingredients'
            ,
          data: averageCountIngredients,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        },
        {
            label: 'Average Number of Steps',
            data: averageCountSteps,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1
        }
        ]
      };


    return (
        <div>
            <h4 className='chart-title'>Average Ingredient Count By Cuisine</h4>
            <Bar data={data} height={300}  ></Bar>
        </div>
    )
}


