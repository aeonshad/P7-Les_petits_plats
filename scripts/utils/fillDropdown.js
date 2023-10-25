const ingredientsList = [];
const appareilsList = [];
const ustensilesList = [];

async function ingredients() {
    recettesData.forEach((recette) => {
        recette.ingredients.forEach((ingredient) => {
            if (!ingredientsList.includes(ingredient.ingredient)) {
                ingredientsList.push(ingredient.ingredient);
            }
        });
    });
    fillDropdown(ingredientsList, 'ingredients');
}

async function appareils() {
    recettesData.forEach((recette) => {
        if (!appareilsList.includes(recette.appliance)) {
            appareilsList.push(recette.appliance);
        }
    });
    fillDropdown(appareilsList, 'appliance');
}

async function ustensiles() {
    recettesData.forEach((recette) => {
        recette.ustensils.forEach((ustensil) => {
            if (!ustensilesList.includes(ustensil)) {
                ustensilesList.push(ustensil);
            }
        });
    });
    fillDropdown(ustensilesList, 'ustensils');
}

async function fill() {
    ingredients();
    appareils();
    ustensiles();
    tagInitialiser();
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
