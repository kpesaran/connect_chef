
import axios from "axios";

import type {Post} from '../../interfaces'

const fetchPostsData = async () => {
    try {
      const token = localStorage.getItem('token')
      const endpoint = `http://localhost:3001/api/v1/postings?`;
        const response = await axios.get(endpoint, {
            headers: {
          Authorization: `Bearer ${token}`
      }});
      return response.data;
    } catch (err) {
      throw new Error('failed to fetch posts');
    }
  };


function filteredPostsByCountry(posts:Post[], selectedCountry:string) {
    return posts.filter(post => post.country === selectedCountry)
}

function mostPopularIngredient(posts: Post[]) {
    const ingredientCount = new Map()
    posts.forEach(post => {
        const ingredients
            = post.ingredients
        ingredients.forEach(ingredient => {
            let ingredientName = ingredient.name
            
            const parts = ingredientName.split('(')
            ingredientName = parts[0].trim()

            if (ingredientName && ingredientName !== 'Salt' && ingredientName !== 'Pepper' ) {
                ingredientCount.set(ingredientName, (ingredientCount.get(ingredientName) || 0) + 1 )
            }
        })
    })
    console.log(ingredientCount)
        let mostPopularIngredient = null;
        let maxCount = 0

        ingredientCount.forEach((count, ingredient) => {
            if (count > maxCount) {
                mostPopularIngredient = ingredient
                maxCount = count
            }
        })
    
    return mostPopularIngredient
}

type MappedCount = {
    [key:string]: number
}

function countOccurences(list:string[]) {
    const occurenceMap:MappedCount = {};
    list.forEach((item) => {
        occurenceMap[item] = (occurenceMap[item] || 0) + 1;
    });
    return occurenceMap;
}


export {filteredPostsByCountry, mostPopularIngredient, countOccurences, fetchPostsData}