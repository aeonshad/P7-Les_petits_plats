/**
 * Fonction qui crée un template d'erreur pour afficher un message lorsque aucune recette ne correspond à la recherche.
 * @returns {HTMLDivElement} Le wrapper contenant le template d'erreur.
 */
function errorTemplate() {
    const $wrapper = document.createElement('div');
    $wrapper.setAttribute('class', 'error');
    const textInput = document.querySelector('.form-search');
    console.log(textInput);
    const error = `
    <img class="error-img" src="images/notfound.png" alt="">
    <h2 class="error-text">Aucune recette ne contient '${textInput.value}' vous pouvez chercher «
        tarte aux pommes », « poisson », etc.</h2>
        `;
    $wrapper.innerHTML = error;
    return $wrapper;
}
