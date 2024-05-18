import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

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
        label: 'My First Dataset',
        data: chartData,
        backgroundColor: [
          'rgb(255, 99, 132,.8)',
          'rgb(54, 162, 235,.8)',
          'rgb(255, 205, 86,.8)',
          'rgb(75, 192, 192,.8)',
          'rgb(153, 102, 255,.8)',
          'rgb(255, 159, 64,.8)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },

      tooltip: {
        mode: 'index',
        intersect: false,
      },
      datalabels: {
        color: 'white',
        font: {
          size: '24px',
        },
      },
    },
  };

  return (
    <div className='pie-chart-container'>
      <h4>Cuisine Diversity Around the World </h4>
      <div className='chart-wrapper'>
        <Bar data={data} options={options} />
      </div>

      {/* <Bar options={options} data={data} /> */}
    </div>
  );
}
