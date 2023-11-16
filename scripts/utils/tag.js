/**
 * Fonction qui gère l'événement de suppression d'un tag actif.
 * @param {HTMLElement} tag - L'élément de tag à supprimer.
 * @param {HTMLElement} elementDropdown - L'élément de menu déroulant associé au tag.
 */
function tagCancel(tag, elementDropdown) {
    tag.addEventListener('click', () => {
        tag.remove();
        elementDropdown.classList.toggle('hidden');
        resetSearchByTag(elementDropdown.innerText.toLowerCase());
    });
}

/**
 * Fonction qui initialise les événements pour créer et gérer les tags à partir des options du menu déroulant.
 */
async function tagInitialiser() {
    const tag_section = document.querySelector('.tag_section');
    const options = document.querySelectorAll('.options li');
    options.forEach((option) => {
        option.addEventListener('click', () => {
            const tag = document.createElement('div');
            tag.setAttribute('class', 'tag');
            const tagContent = `
            <p class="tag-text">${option.innerText}</p>
            <button class="tag-button"><i class="fa-solid fa-xmark"></i></button>
        `;
            tag.innerHTML = tagContent;
            tag_section.appendChild(tag);
            option.classList.toggle('hidden');
            tagCancel(tag, option);
            searchByTag(option.innerText.toLowerCase());
        });
    });
}
