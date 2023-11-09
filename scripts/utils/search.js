const searchBar = document.querySelector('.form-search');
const inputForm = document.querySelectorAll('.form-filter-search');

let tabA = [];
let tabB = [];
let tabC = [];
let tagActive = [];

function filter(array, text) {
    return array.filter((Recette) => {
        const nameMatch = Recette.name.toLowerCase().includes(text);
        const descriptionMatch = Recette.description.toLowerCase().includes(text);
        const ingredientsMatch = Recette.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(text));
        const appareilsMatch = Recette.appliance.toLowerCase().includes(text);
        const ustensilesMatch = Recette.ustensils.some((ustensile) => ustensile.toLowerCase().includes(text));
        return nameMatch || descriptionMatch || ingredientsMatch || appareilsMatch || ustensilesMatch;
    });
}

function secondSearch() {
    if (tagActive.length >= 1) {
        tabB = tabA;
        tagActive.forEach((tag) => {
            tabB = filter(tabB, tag);
        });
        tabC = tabB;
    } else {
        tabC = tabA;
    }
}

function mainSearch(text) {
    if (text.length >= 3) {
        tabA = filter(recettesData, text);
    } else {
        tabA = recettesData;
    }
    secondSearch();
}

function resetInputForm() {
    inputForm.forEach((input) => {
        input.value = '';
    });
}

async function searchByTag(text) {
    tagActive.push(text);
    console.log(tagActive);
    secondSearch();
    resetInputForm();
    display(tabC);
}

async function resetSearchByTag(text) {
    if (tagActive.length >= 1) {
        var index = tagActive.indexOf(text);
        if (index !== -1) {
            tagActive.splice(index, 1);
        }
    }
    secondSearch();
    display(tabC);
}

searchBar.addEventListener('keyup', (e) => {
    const text = e.target.value;
    mainSearch(text);
    display(tabC);
});
