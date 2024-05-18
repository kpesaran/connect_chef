


function filteredPostsByCountry(posts, selectedCountry) {
    return posts.filter(post => post.country === selectedCountry)
}

function mostPopularIngredient(posts) {
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

function countOccurences(list) {
    const occurenceMap = {};
    list.forEach((item) => {
        occurenceMap[item] = (occurenceMap[item] || 0) + 1;
    });
    return occurenceMap;
}


export {filteredPostsByCountry, mostPopularIngredient, countOccurences}