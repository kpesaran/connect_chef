import { Post } from '../../../../interfaces';
import { filteredPostsByCountry } from '../../utils';

interface StepsAvgProps {
  posts: Post[];
  selectedCountry: string | null;
}

export default function StepsAvg({ posts, selectedCountry }:StepsAvgProps):JSX.Element {
  const displayedPosts = selectedCountry
    ? filteredPostsByCountry(posts, selectedCountry)
    : posts;

  const steps:number[] = [];

  displayedPosts.map((post) => {
    steps.push(post.steps.length);
  });

  let totalSteps = 0;

  steps.forEach((step) => {
    totalSteps += step;
  });

  const averageSteps = Math.round((totalSteps / steps.length) * 100) / 100;

  return (
    <div className='stat-box'>
      <h4 className='stat-title'>Average Steps</h4>
      <span className='stat'>{averageSteps}</span>
    </div>
  );
}
