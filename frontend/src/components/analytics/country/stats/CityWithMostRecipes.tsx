import { filteredPostsByCountry } from '../../utils';

import { countOccurences } from '../../utils';
import '../../styles.css';

export default function CityWithMostRecipes({ posts, selectedCountry }) {
  const includedPosts = selectedCountry
    ? filteredPostsByCountry(posts, selectedCountry)
    : posts;

  const citiesPosted = includedPosts.map((post) => {
    return post.city;
  });

  const recipeCountByCity = countOccurences(citiesPosted);

  console.log(recipeCountByCity);

  const maxValue = Object.values(recipeCountByCity).reduce(
    (max, score) => (score > max ? score : max),
    -Infinity
  );

  const maxCities = Object.keys(recipeCountByCity).reduce((cities, city) => {
    if (recipeCountByCity[city] === maxValue) {
      cities.push(city);
    }
    return cities;
  }, []);

  return (
    <div className='stat-box'>
      <h4 className='stat-title'>City With Most Posted Recipes</h4>
      <span className='stat'>{maxCities[0]}</span>
    </div>
  );
}
