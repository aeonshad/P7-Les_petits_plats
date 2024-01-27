// Sélection de l'élément DOM représentant la barre de recherche principale.
const searchBar = document.querySelector('.form-search');

// Sélection de tous les formulaires de filtre de recherche.
const inputForm = document.querySelectorAll('.form-filter-search');

//Tableaux pour stocker les résultats de recherche et les tags actifs.
let tabA = [];
let tabB = [];
let tabC = [];
let tagActive = [];

/**
 * Fonction qui filtre les recettes en fonction du texte saisi dans la barre de recherche.
 * @param {Array} array - Le tableau de recettes à filtrer.
 * @param {string} text - Le texte saisi dans la barre de recherche.
 * @returns {Array} Le tableau filtré de recettes.
 */
function filter(array, text) {
    const arrayFilter = [];

    for (let i = 0; i < array.length; i++) {
        const Recette = array[i];
        const nameMatch = Recette.name.toLowerCase().includes(text);
        const descriptionMatch = Recette.description.toLowerCase().includes(text);
        const appareilsMatch = Recette.appliance.toLowerCase().includes(text);
        let ingredientsMatch = false;
        for (j = 0; j < Recette.ingredients.length; j++) {
            if (Recette.ingredients[j].ingredient.toLowerCase().includes(text)) {
                ingredientsMatch = true;
                break;
            }
        }
        let ustensilesMatch = false;
        for (let k = 0; k < Recette.ustensils.length; k++) {
            if (Recette.ustensils[k].toLowerCase().includes(text)) {
                ustensilesMatch = true;
                break;
            }
        }
        if (nameMatch || descriptionMatch || ingredientsMatch || appareilsMatch || ustensilesMatch) {
            arrayFilter.push(Recette);
        }
    }

    return arrayFilter;
}

/**
 * Fonction qui effectue une recherche secondaire en fonction des tags actifs.
 */
function secondSearch() {
    if (tagActive.length >= 1) {
        tabB = tabA;
        tagActive.forEach((tag) => {
            tabB = filter(tabB, tag);
        });
        tabC = tabB;
    } else {
        tabC = tabA;
    }
}

/**
 * Fonction principale qui effectue la recherche principale en fonction du texte saisi.
 * @param {string} text - Le texte saisi dans la barre de recherche.
 */
function mainSearch(text) {
    if (text.length >= 3) {
        tabA = filter(recettesData, text);
    } else {
        tabA = recettesData;
    }
    secondSearch();
}

/**
 * Fonction qui réinitialise les formulaires de filtre de recherche.
 */
function resetInputForm() {
    inputForm.forEach((input) => {
        input.value = '';
    });
}

/**
 * Fonction qui ajoute un tag actif, effectue une recherche secondaire et réinitialise les formulaires de filtre.
 * @param {string} text - Le texte du tag à ajouter.
 */
async function searchByTag(text) {
    if (tabA.length == 0) {
        tabA = recettesData;
    }
    tagActive.push(text);
    secondSearch();
    resetInputForm();
    display(tabC);
}

/**
 * Fonction qui supprime un tag actif, effectue une recherche secondaire et affiche les résultats.
 * @param {string} text - Le texte du tag à supprimer.
 */
async function resetSearchByTag(text) {
    if (tagActive.length >= 1) {
        var index = tagActive.indexOf(text);
        if (index !== -1) {
            tagActive.splice(index, 1);
        }
    }
    secondSearch();
    display(tabC);
}

/**
 * Gestion de l'événement de saisie dans la barre de recherche principale.
 */
searchBar.addEventListener('keyup', (e) => {
    const text = e.target.value;
    mainSearch(text);
    display(tabC);
});
