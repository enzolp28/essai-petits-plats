

function displayFiltres(recettesActuelles) {
    let appareils = new Set();
    let ustensils = new Set();
    let ingredients = new Set();

    recettesActuelles.forEach((recette) => {
        appareils.add(recette.appliance);

        recette.ustensils.forEach((ustensil) => {
            ustensils.add(ustensil);
        })

        recette.ingredients.forEach((ingredient) => {
            ingredients.add(ingredient.ingredient);

        })
    })

    return {
        appareils: Array.from(appareils),
        ustensils: Array.from(ustensils),
        ingredients: Array.from(ingredients)
    };
}

function createListFiltres(list, filtres, className) {
    list.innerHTML = '';
    filtres.forEach(filtre => {
        list.innerHTML += `<li class="${className}">${filtre}</li>`;
    });
}

export {  displayFiltres, createListFiltres };