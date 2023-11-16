// Sélection de tous les boutons de menu déroulant.
const btnDropdown = document.querySelectorAll('.filter-dropdown button');

// Sélection de tous les formulaires de filtre.
const formFilter = document.querySelectorAll('.form-filter');

//Liste pour stocker les tags de filtre.
let tagsFilter = [];

/**
 * Gestion des événements pour les boutons de menu déroulant.
 */
btnDropdown.forEach((btn) => {
    const up = btn.querySelector('.fa-chevron-up');
    const down = btn.querySelector('.fa-chevron-down');
    const optionsList = btn.parentElement.querySelector('.options');
    // Ajout d'un événement au clic sur le bouton de menu déroulant.
    btn.addEventListener('click', () => {
        optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
        up.classList.toggle('active');
        down.classList.toggle('active');
    });
});

/**
 * Fonction qui filtre les tags en fonction du texte saisi dans le formulaire de filtre.
 * @param {string} idElementDOM - L'ID de l'élément DOM associé au formulaire de filtre.
 * @param {string} text - Le texte saisi dans le formulaire de filtre.
 * @returns {Array} Le tableau filtré de tags correspondant au texte saisi.
 */
function filterTag(idElementDOM, text) {
    let arrayName = null;
    // Sélection de la liste appropriée en fonction de l'ID de l'élément DOM.
    switch (idElementDOM) {
        case 'ingredients':
            arrayName = ingredientsList;
            break;
        case 'appliance':
            arrayName = appareilsList;
            break;

        case 'ustensils':
            arrayName = ustensilesList;
            break;
    }
    // Filtrage des tags en fonction du texte saisi.
    return arrayName.filter((tag) => {
        const nameMatch = tag.toLowerCase().includes(text);
        return nameMatch;
    });
}

/**
 * Gestion des événements de saisie dans les formulaires de filtre.
 */
formFilter.forEach((form) => {
    form.addEventListener('keyup', (e) => {
        const dropdown = form.parentElement;
        const tag = dropdown.querySelectorAll('li');
        tag.forEach((li) => {
            li.remove();
        });
        const text = e.target.value;
        tagsFilter = filterTag(form.parentElement.id, text);
        console.log(tagsFilter);
        fillDropdown(tagsFilter, form.parentElement.id);
        tagInitialiser();
    });
});
