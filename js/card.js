//Permet d'afficher les recettes
function displayRecettes(recettes) {
    let html = '';
    recettes.forEach((recette) => {
        const { image, name, ingredients, time, description } = recette;
        html += `
            <div class="card">
                <div class="card-img">
                    <img src="./img/recipes/${image}" alt="${name}">
                    <span>${time}min</span>
                </div>
                <div class="card-content">
                    <h3>${name}</h3>
                    <div class="card-content_recette">
                        <h4>RECETTE</h4>
                        <p>${description}.</p>
                    </div>
                    <div class="card-content_ingredient">
                        <h4>INGRÉDIENTS</h4>
                        <div class="card-ingredient">
                            ${ingredients.map((ingredient) => `<div class="card-ingredient_list">
                                <p>${ingredient.ingredient}</p>
                                ${ingredient.quantity ? `<p>${ingredient.quantity} ${ingredient.unit ? ingredient.unit : ""} </p>` : ''}
                                
                            </div>`
        ).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    document.querySelector('#compteur-recipes').innerText = `${recettes.length} recettes`;
    document.querySelector('.container-card').innerHTML = html;
}

export { displayRecettes };