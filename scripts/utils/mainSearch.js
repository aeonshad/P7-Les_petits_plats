const searchBar = document.querySelector('.form-search');
let recettesFilter = [];

function filter2(array, text) {
    return array.filter((Recette) => {
        const nameMatch = Recette.name.toLowerCase().includes(text);
        const descriptionMatch = Recette.description.toLowerCase().includes(text);
        const ingredientsMatch = Recette.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase().includes(text));
        const appareilsMatch = Recette.appliance.toLowerCase().includes(text);
        const ustensilesMatch = Recette.ustensils.some((ustensile) => ustensile.toLowerCase().includes(text));
        return nameMatch || descriptionMatch || ingredientsMatch || appareilsMatch || ustensilesMatch;
    });
}

async function search(text) {
    if (recettesTagFilter.length > 1) {
        console.log('test');
        recettesFilter = filter2(recettesTagFilter, text);
    } else {
        console.log('test2');
        recettesFilter = filter2(recettesData, text);
    }

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
