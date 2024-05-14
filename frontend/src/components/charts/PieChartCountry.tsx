import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function PieChartCountry({ selectedCountry, posts }) {
  const categoriesFromCountry = posts
    .filter((post) => post.country === selectedCountry)
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
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
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
      <Pie data={data} options={options} />

      {/* <Bar options={options} data={data} /> */}
    </div>
  );
}
