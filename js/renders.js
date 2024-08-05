import { addTagEventListener } from "./event.js";
import { createListFiltres } from "./filtres.js";


const appareilsList = document.querySelector('#appareils-list');
const ustensilsList = document.querySelector('#ustensiles-list');
const ingredientsList = document.querySelector('#ingredients-list');


function applyFiltres(filtresTags, recettes) {
    const { tagAppareils, tagUstensils, tagIngredients, searchValue } = filtresTags;

    const recettesFiltrées = [...recettes].filter((recette) => {
        const ingredientsInRecette = recette.ingredients.map((ingredient) => ingredient.ingredient.toLowerCase());
        const appareilsInRecette = recette.appliance.toLowerCase();
        const ustensilsInRecette = recette.ustensils.map((ustensil) => ustensil.toLowerCase());
        return (
            recette.name.toLowerCase().includes(searchValue) &&
            (tagAppareils.length === 0 || tagAppareils.every((appareils) => appareils.includes(appareilsInRecette))) &&
            (tagUstensils.length === 0 || tagUstensils.every((ustensil) => ustensilsInRecette.includes(ustensil))) &&
            (tagIngredients.length === 0 || tagIngredients.every((ingredient) => ingredientsInRecette.includes(ingredient)))
        );
    });

    return recettesFiltrées;
}


function displayLists(ingredients, appareils, ustensils) {

    createListFiltres(appareilsList, appareils, 'tag-appareil');
    createListFiltres(ustensilsList, ustensils, 'tag-ustensil');
    createListFiltres(ingredientsList, ingredients, 'tag-ingredient');
    addTagEventListener('.tag-ingredient', '#tag-ingredients', 'tagIngredients');
    addTagEventListener('.tag-appareil', '#tag-appareils', 'tagAppareils');
    addTagEventListener('.tag-ustensil', '#tag-ustensiles', 'tagUstensils');

}

export { displayLists, applyFiltres };
