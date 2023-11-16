// Sélection de l'élément DOM représentant le nombre de recettes.
const number = document.getElementById('number');

/**
 * Fonction qui met à jour le nombre de recettes affichées.
 * @param {Array} array - Le tableau de recettes à compter.
 */
async function count(array) {
    number.innerText = parseInt(array.length, 10) + ' recette(s)';
}
