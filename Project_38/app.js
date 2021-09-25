// https://www.edamam.com/

const appId = "b8357617";
const appKey = "5ac80a3a940c58f142083f2147089c67";
const recipeURL = "https://api.edamam.com/search?q=";

const searchInput = document.querySelector('.search-input');
const searchResults = document.querySelector('.search-results');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchQuery = searchInput.value;
    fetchRecipies(searchQuery);
})

async function fetchRecipies(searchQuery) {
    const repsonse = await fetch(`${recipeURL}${searchQuery}&app_id=${appId}&app_key=${appKey}&to=30`);
    const repsonseData = await repsonse.json();
    displayRecipies(repsonseData.hits);
}

function displayRecipies(recipeResults) {
    let recipeEl = '';

    recipeResults.forEach((recipeResult) => {
        recipeEl += `
        <div class="item">
        <img src="${recipeResult.recipe.image}" />
        <div class="content-wrapper">
          <h2 class="recipe-title">${recipeResult.recipe.label}</h2>
          <a href="${recipeResult.recipe.url
            }" target="_blank" class="view-recipe">View Recipe</a>
        </div>
        <div class="recipe-desc">
          <p class="item-data">Calories: ${recipeResult.recipe.calories.toFixed(
                2
            )}</p>
          <p class="item-data">Diet Label: ${recipeResult.recipe.dietLabels}</p>
          <p class="item-data">Health Label: ${recipeResult.recipe.healthLabels.slice(0, 4)
            }</p>
          <p class="item-data">Source: ${recipeResult.recipe.source}</p>
        </div>
    </div>
        `;

        searchResults.innerHTML = recipeEl;
    });
}