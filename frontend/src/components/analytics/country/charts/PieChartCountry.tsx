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
        label: 'Cuisine Distribution',
        data: chartData,
        backgroundColor: [
          'rgb(255, 99, 132,.6)',
          'rgb(54, 162, 235,.6)',
          'rgb(255, 205, 86,.6)',
          'rgb(75, 192, 192,.6)',
          'rgb(153, 102, 255,.6)',
          'rgb(255, 159, 64,.6)',
          'rgb(105,192,192,0.4)'

        ],
        borderColor : [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
          'rgb(105,192,192)'
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
      <h4 className='chart-title'>Distribution of Posted Cuisines </h4>
      <Doughnut data={data} options={options} />

      {/* <Bar options={options} data={data} /> */}
    </div>
  );
}
