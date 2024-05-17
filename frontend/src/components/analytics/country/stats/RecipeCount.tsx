import { filteredPostsByCountry } from '../utils';

export default function RecipeCount({ posts, selectedCountry }) {
    const displayedPosts = selectedCountry ? filteredPostsByCountry(posts, selectedCountry) : posts

  return (
    <>
      <h4>Total Recipes</h4>
      <span>{displayedPosts.length}</span>
    </>
  );
}
