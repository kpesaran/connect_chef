import React from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';

import { countOccurences } from '../utils';

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function PieChartCountry({ selectedCountry, posts }) {
  const categoriesFromCountry = posts
    .filter((post) => post.country === selectedCountry)
    .map((post) => post.category)
    .flat()
    .filter((value) => value != '');

  

  const categoryCount = countOccurences(categoriesFromCountry);

  const chartLabels = Object.keys(categoryCount);

  const chartData = Object.values(categoryCount);

  console.log(categoriesFromCountry);
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

        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
      },
    },
  };

  return (
    <div className='pie-chart-container'>
      <h4 className='chart-title'>Cuisine Diversity by Country </h4>
      <Doughnut data={data} options={options} />

      {/* <Bar options={options} data={data} /> */}
    </div>
  );
}
