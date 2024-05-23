import { Post } from '../../../../interfaces';
import { filteredPostsByCountry, mostPopularIngredient } from '../../utils';

interface MostPopularIngredientProps {
  posts: Post[];
  selectedCountry: string | null;
}

export default function MostPopularIngredient({ posts, selectedCountry }:MostPopularIngredientProps) : JSX.Element {
  const filterPosts = selectedCountry
    ? filteredPostsByCountry(posts, selectedCountry)
    : posts;

  const ingredient = mostPopularIngredient(filterPosts);

  return (
    <div className='stat-box'>
      <h4 className='stat-title'>Most Common Ingredient:</h4>
      <span className='stat'>{ingredient}</span>
    </div>
  );
}
