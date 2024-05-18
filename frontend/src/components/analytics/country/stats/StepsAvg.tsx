import { filteredPostsByCountry } from '../utils';

export default function StepsAvg({ posts, selectedCountry }) {
    const displayedPosts = selectedCountry ? filteredPostsByCountry(posts, selectedCountry) : posts

    const steps = []
    
    displayedPosts.map(post => {
        steps.push(post.steps.length)
    })

    let totalSteps = 0

    steps.forEach(step => {
        totalSteps += step
    })

    const averageSteps = Math.round((totalSteps / steps.length)*100) / 100



  return (
    <div className='stat-box'>
      <h4>Average Steps</h4>
      <span className='stat'>{averageSteps}</span>
    </div>
  );
}
