// Listes des éléments distincts utilisés dans les recettes.
let ingredientsList = [];
let appareilsList = [];
let ustensilesList = [];

/**
 * Fonction qui parcourt les recettes pour extraire les ingrédients uniques et les ajoute à la liste des ingrédients.
 * @param {Array} array - Le tableau de recettes à analyser.
 */
async function ingredients(array) {
    array.forEach((recette) => {
        recette.ingredients.forEach((ingredient) => {
            if (!ingredientsList.includes(ingredient.ingredient) && !tagActive.includes(ingredient.ingredient.toLowerCase())) {
                ingredientsList.push(ingredient.ingredient);
            }
        });
    });
    fillDropdown(ingredientsList, 'ingredients');
}

/**
 * Fonction qui parcourt les recettes pour extraire les appareils uniques et les ajoute à la liste des appareils.
 * @param {Array} array - Le tableau de recettes à analyser.
 */
async function appareils(array) {
    array.forEach((recette) => {
        if (!appareilsList.includes(recette.appliance) && !tagActive.includes(recette.appliance.toLowerCase())) {
            appareilsList.push(recette.appliance);
        }
    });
    fillDropdown(appareilsList, 'appliance');
}

/**
 * Fonction qui parcourt les recettes pour extraire les ustensiles uniques et les ajoute à la liste des ustensiles.
 * @param {Array} array - Le tableau de recettes à analyser.
 */
async function ustensiles(array) {
    array.forEach((recette) => {
        recette.ustensils.forEach((ustensil) => {
            if (!ustensilesList.includes(ustensil) && !tagActive.includes(ustensil.toLowerCase())) {
                ustensilesList.push(ustensil);
            }
        });
    });
    fillDropdown(ustensilesList, 'ustensils');
}

/**
 * Fonction qui remplit le contenu d'un élément de liste déroulante avec des boutons correspondant aux éléments de la liste fournie.
 * @param {Array} array - Le tableau d'éléments à afficher dans la liste déroulante.
 * @param {string} idElementDOM - L'ID de l'élément DOM à remplir.
 */
async function fillDropdown(array, idElementDOM) {
    const dropdownList = document.getElementById(idElementDOM);
    array.forEach((element) => {
        const line = document.createElement('li');
        const btn = document.createElement('button');
        btn.setAttribute('class', 'btn-tag');
        btn.innerText = element;
        line.appendChild(btn);
        dropdownList.appendChild(line);
    });
}

/**
 * Fonction qui réinitialise les listes des ingrédients, appareils et ustensiles.
 */
async function resetList() {
    ingredientsList = [];
    appareilsList = [];
    ustensilesList = [];
}

/**
 * Fonction qui vide les éléments de liste déroulante en réinitialisant les listes.
 */
async function unFillDropdown() {
    const dropdown = document.querySelectorAll('ul');
    dropdown.forEach((ul) => {
        const tag = ul.querySelectorAll('li');
        tag.forEach((li) => {
            li.remove();
        });
    });
    resetList();
}

/**
 * Fonction qui remplit les listes d'ingrédients, d'appareils et d'ustensiles et initialise les tags.
 * @param {Array} array - Le tableau de recettes courant à utiliser pour remplir les listes.
 */
async function fill(array) {
    unFillDropdown();
    ingredients(array);
    appareils(array);
    ustensiles(array);
    tagInitialiser();
}
