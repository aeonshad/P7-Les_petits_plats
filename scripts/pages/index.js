// Instance de la classe Api pour interagir avec l'API des recettes.
const api = new Api('/data/recipes.json');

// Sélection des éléments HTML pour l'affichage des recettes et des erreurs.
const recetteSection = document.querySelector('.recette_section');
const errorSection = document.querySelector('.error_section');

// Stockage des données des recettes.
let recettesData = [];

/**
 * Affiche les recettes dans la section dédiée et gère l'affichage des erreurs le cas échéant.
 * Appel aux fonctions de comptage et de remplissage pour le tableau courant.
 * @param {Array} array - Le tableau de recettes à afficher.
 */
async function display(array) {
    recetteSection.innerHTML = '';
    errorSection.innerHTML = '';
    if (array.length >= 1) {
        array.forEach((recette) => {
            const recetteModel = new RecetteCard(recette);
            recetteSection.appendChild(recetteModel.createRecetteCard());
        });
    } else {
        errorSection.appendChild(errorTemplate());
    }
    count(array);
    fill(array);
}

/**
 * Récupère les recettes depuis l'API, crée des objets Recette correspondants et les affiche.
 */
async function getRecettes() {
    const recettesApi = await api.getRecettes();
    recettesData = recettesApi.map((recette) => new Recette(recette));
    display(recettesData);
}

/**
 * Fonction principale qui initialise le processus en récupérant et affichant les recettes.
 */
async function main() {
    getRecettes();
}

// Appel de la fonction principale pour démarrer le processus.
main();
