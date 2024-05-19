import React from 'react';
import { Bar } from 'react-chartjs-2';


import ChartDataLabels from 'chartjs-plugin-datalabels';



export default function CuisineCountBarGlobal({ posts }) {
  const categories = posts
    .map((post) => post.category)
    .flat()
    .filter((value) => value != '');
    
  function countOccurences(list) {
    const occurenceMap = {};
    list.forEach((item) => {
      occurenceMap[item] = (occurenceMap[item] || 0) + 1;
    });
    return occurenceMap;
  }

  const categoryCount = countOccurences(categories);

  const chartLabels = Object.keys(categoryCount);

  const chartData = Object.values(categoryCount);


  console.log(categoryCount);

  const data = {
    labels: chartLabels,
    datasets: [
      {
        
        data: chartData,
        backgroundColor: [
          'rgb(255, 99, 132,.7)',
          'rgb(54, 162, 235,.7)',
          'rgb(255, 205, 86,.7)',
          'rgb(75, 192, 192,.7)',
          'rgb(153, 102, 255,.7)',
          'rgb(255, 159, 64,.7)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display:false,
      },

      tooltip: {
        mode: 'index',
        intersect: false,
      },
      datalabels: {
        color: 'white',
        font: {
          size: '24px',
          weight: 'bold'
        },
        
      },
      
      
    },
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
            size: 24
          }
        }
      }
    }
    
    
  };

  return (
    <div className='pie-chart-container'>
      
    
      <h4 className='chart-title'>Cuisine Diversity Around the World </h4>
        <Bar height={500} width={500} data={data} options={options} />

    
    </div>
  );
}
