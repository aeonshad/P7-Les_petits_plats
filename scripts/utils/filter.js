const btnDropdown = document.querySelectorAll('.filter-dropdown button');
const formFilter = document.querySelectorAll('.form-filter');
let tagsFilter = [];

btnDropdown.forEach((btn) => {
    const up = btn.querySelector('.fa-chevron-up');
    const down = btn.querySelector('.fa-chevron-down');
    const optionsList = btn.parentElement.querySelector('.options');
    btn.addEventListener('click', () => {
        optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
        up.classList.toggle('active');
        down.classList.toggle('active');
    });
});

function filterTag(idElementDOM, text) {
    let arrayName = null;
    switch (idElementDOM) {
        case 'ingredients':
            arrayName = ingredientsList;
            break;
        case 'appliance':
            arrayName = applianceList;
            break;

        case 'ustensils':
            arrayName = ustensilesList;
            break;
    }
    return arrayName.filter((tag) => {
        const nameMatch = tag.toLowerCase().includes(text);
        return nameMatch;
    });
}

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
