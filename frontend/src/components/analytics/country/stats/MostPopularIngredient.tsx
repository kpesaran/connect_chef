import { filteredPostsByCountry, mostPopularIngredient } from '../utils';

export default function MostPopularIngredient({ posts, selectedCountry }) {
  const filterPosts = selectedCountry ?  filteredPostsByCountry(posts, selectedCountry) : posts

  const ingredient = mostPopularIngredient(filterPosts);

  return (
    <div>
      <h4>Most Common Ingredient:</h4>
      {ingredient}
    </div>
  );
}
