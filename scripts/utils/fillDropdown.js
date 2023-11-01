let ingredientsList = [];
let appareilsList = [];
let ustensilesList = [];

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

async function appareils(array) {
    array.forEach((recette) => {
        if (!appareilsList.includes(recette.appliance) && !tagActive.includes(recette.appliance.toLowerCase())) {
            appareilsList.push(recette.appliance);
        }
    });
    fillDropdown(appareilsList, 'appliance');
}

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

async function resetList() {
    ingredientsList = [];
    appareilsList = [];
    ustensilesList = [];
}

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

async function fill(array) {
    unFillDropdown();
    ingredients(array);
    appareils(array);
    ustensiles(array);
    tagInitialiser();
}
