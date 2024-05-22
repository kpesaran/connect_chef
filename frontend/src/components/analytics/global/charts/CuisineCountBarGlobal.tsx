import { Bar } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import type { Post } from '../../../../interfaces';
import { countOccurences } from '../../utils';
interface CuisineCountBarGlobalProp {
  posts: Post[];
}

export default function CuisineCountBarGlobal({
  posts,
}: CuisineCountBarGlobalProp): JSX.Element {
  const categories = posts
    .map((post) => post.category)
    .flat()
    .filter((value) => value != '');

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
          'rgb(255, 99, 132,.6)',
          'rgb(54, 162, 235,.6)',
          'rgb(255, 205, 86,.6)',
          'rgb(75, 192, 192,.6)',
          'rgb(153, 102, 255,.6)',
          'rgb(255, 159, 64,.6)',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        mode: 'index',
        intersect: false,
      },
      // datalabels: {
      //   color: 'white',
      //   font: {
      //     size: '24px',
      //     weight: 'bold'
      //   },

      // },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 18,
            weight: 'bold',
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 24,
          },
        },
      },
    },
  };

  return (
    <div className='pie-chart-container'>
      <h4 className='chart-title'>Posted Recipe Count By Cuisine </h4>
      <Bar height={500} width={500} data={data} options={options} />
    </div>
  );
}
