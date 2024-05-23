import { Post } from '../../../../interfaces';
import { filteredPostsByCountry } from '../../utils';

interface RecipeCountProps {
  posts: Post[];
  selectedCountry: string | null;
}

export default function RecipeCount({ posts, selectedCountry }:RecipeCountProps): JSX.Element {
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
