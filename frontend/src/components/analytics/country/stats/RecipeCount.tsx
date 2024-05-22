import { filteredPostsByCountry } from '../../utils';

export default function RecipeCount({ posts, selectedCountry }) {
  const displayedPosts = selectedCountry
    ? filteredPostsByCountry(posts, selectedCountry)
    : posts;

  return (
    <div className='stat-box'>
      <h4 className='stat-title'>Total Recipes</h4>
      <span className='stat'>{displayedPosts.length}</span>
    </div>
  );
}
