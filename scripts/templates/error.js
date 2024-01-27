/**
 * Fonction qui crée un template d'erreur pour afficher un message lorsque aucune recette ne correspond à la recherche.
 * @returns {HTMLDivElement} Le wrapper contenant le template d'erreur.
 */
function errorTemplate() {
    const $wrapper = document.createElement('div');
    $wrapper.setAttribute('class', 'error');

    $wrapper.innerHTML = `<img class="error-img" src="images/notfound.png" alt="">
    <h2 class="error-text"></h2>`;

    const textInput = document.querySelector('.form-search');
    $wrapper.querySelector('.error-text').innerText = `Aucune recette ne contient '${textInput.value}' vous pouvez chercher «
    tarte aux pommes », « poisson », etc.`;

    console.log(textInput);
    return $wrapper;
}
