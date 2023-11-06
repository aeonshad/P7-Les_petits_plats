let recettesTagFilter = [];
let tagActive = [];
const inputForm = document.querySelectorAll('.form-filter-search');

function resetInputForm() {
    inputForm.forEach((input) => {
        input.value = '';
    });
}

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

async function searchByTag(text) {
    if (recettesFilter.length >= 1) {
        if (tagActive.length >= 1) {
            recettesTagFilter = filter(recettesTagFilter, text);
        } else {
            recettesTagFilter = filter(recettesFilter, text);
        }
    } else {
        if (tagActive.length >= 1) {
            recettesTagFilter = filter(recettesTagFilter, text);
            console.log('second');
        } else {
            recettesTagFilter = filter(recettesData, text);
            console.log('first');
        }
    }
    tagActive.push(text);
    console.log(tagActive);
    console.log(tagActive.length);
    resetInputForm();
    display(recettesTagFilter);
}

async function resetSearchByTag(text) {
    if (recettesFilter.length >= 1) {
        if (tagActive.length >= 1) {
            var index = tagActive.indexOf(text);
            if (index !== -1) {
                tagActive.splice(index, 1);
            }
            recettesTagFilter = recettesFilterInitial;
            tagActive.forEach((tag) => {
                recettesTagFilter = filter(recettesTagFilter, tag);
            });
            console.log('remove main');
            console.log(recettesTagFilter);
            if (tagActive.length >= 1) {
                console.log('remove main1');
                display(recettesTagFilter);
            } else {
                recettesTagFilter = [];
                console.log('remove main2');
                display(recettesFilterInitial);
            }
        } else {
            console.log('fin main');
            recettesTagFilter = [];
            display(recettesFilter);
        }
    } else {
        if (tagActive.length >= 1) {
            var index = tagActive.indexOf(text);
            if (index !== -1) {
                tagActive.splice(index, 1);
            }
            recettesTagFilter = recettesData;
            tagActive.forEach((tag) => {
                recettesTagFilter = filter(recettesTagFilter, tag);
            });
            if (tagActive.length >= 1) {
                display(recettesTagFilter);
            } else {
                recettesTagFilter = [];
                display(recettesData);
            }
        } else {
            console.log('fin');
            recettesTagFilter = [];
            display(recettesData);
        }
    }
}
