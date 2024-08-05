// import des fonctions pour pouvoir les utiliser dans ce fichier
import { displayRecettes } from './card.js';
import { displayFiltres } from './filtres.js';
import { displayLists } from './renders.js';

let recettes;
let recettesActuelles;


// Récupère les recettes dans le fichier json
async function getRecettes() {
    const response = await fetch('./api/recipes.json');
    const recettes = await response.json();
    return recettes
}

const mainSearch = document.querySelector('#main-search');

// Permet de rechercher dans les recettes
mainSearch.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase().trim();

    if (searchValue.length === 0) {
        displayRecettes(recettes)
        return;
    }

    // tant que la recherche est trop courte on ne fait rien
    if (searchValue.length < 3) {
        return;
    };

    const recettesFiltrees = recettesActuelles.filter((recette) => {
        return recette.name.toLowerCase().includes(searchValue) || recette.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(searchValue)) || recette.description.toLowerCase().includes(searchValue);
    });

    displayRecettes(recettesFiltrees)
});

function handleOpenDropdown() {
    const arrowMenu = document.querySelectorAll('.arrow');
    const dropdownHeaders = document.querySelectorAll('.dropdown-header');
    
    dropdownHeaders.forEach((dropdownHeader, index) => {
        dropdownHeader.addEventListener('click', e => {
            const dropdownParent = e.target.closest('.dropdown');
            dropdownParent.classList.toggle('show');
            arrowMenu[index].classList.toggle('rotate-180');
            
        });
    });
}





async function init() {
    recettes = await getRecettes();
    recettesActuelles = recettes
    displayRecettes(recettes);

    const { appareils, ustensils, ingredients } = displayFiltres(recettesActuelles);
    displayLists(ingredients, appareils, ustensils);
    
    handleOpenDropdown();
}

init()
