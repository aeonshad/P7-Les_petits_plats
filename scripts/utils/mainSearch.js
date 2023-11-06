const searchBar = document.querySelector('.form-search');
let recettesFilter = [];
let recettesFilterInitial = [];

function filter2(array, text) {
    const arrayFilter = [];

    for (let i = 0; i < array.length; i++) {
        const Recette = array[i];
        const nameMatch = Recette.name.toLowerCase().includes(text);
        const descriptionMatch = Recette.description.toLowerCase().includes(text);
        const appareilsMatch = Recette.appliance.toLowerCase().includes(text);
        let ingredientsMatch = false;
        for (j = 0; j < Recette.ingredients.length; j++) {
            if (Recette.ingredients[j].ingredient.toLowerCase().includes(text)) {
                ingredientsMatch = true;
                break;
            }
        }
        let ustensilesMatch = false;
        for (let k = 0; k < Recette.ustensils.length; k++) {
            if (Recette.ustensils[k].toLowerCase().includes(text)) {
                ustensilesMatch = true;
                break;
            }
        }
        if (nameMatch || descriptionMatch || ingredientsMatch || appareilsMatch || ustensilesMatch) {
            arrayFilter.push(Recette);
        }
    }

    return arrayFilter;
}

async function search(text) {
    console.log(text);
    if (recettesTagFilter.length >= 1) {
        console.log('test');
        recettesFilter = filter2(recettesTagFilter, text);
    } else {
        console.log('test2');
        recettesFilter = filter2(recettesData, text);
        recettesFilterInitial = recettesFilter;
    }
    console.log(recettesFilter);
    display(recettesFilter);
}

searchBar.addEventListener('keyup', (e) => {
    const text = e.target.value;
    if (text.length >= 3) {
        search(text);
    } else if (text.length === 0) {
        recettesFilter = [];
        if (recettesTagFilter.length >= 1) {
            console.log('test 3');
            console.log(recettesTagFilter);
            console.log(recettesTagFilter.length);
            display(recettesTagFilter);
        } else {
            console.log('test 4');
            display(recettesData);
        }
    }
});
