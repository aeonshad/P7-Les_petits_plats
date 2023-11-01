const api = new Api('/data/recipes.json');
const recetteSection = document.querySelector('.recette_section');
const errorSection = document.querySelector('.error_section');
let recettesData = [];

async function display(array) {
    recetteSection.innerHTML = '';
    errorSection.innerHTML = '';
    if (array.length >= 1) {
        array.forEach((recette) => {
            const recetteModel = new RecetteCard(recette);
            recetteSection.appendChild(recetteModel.createRecetteCard());
        });
    } else {
        errorSection.appendChild(errorTemplate());
    }
    count(array);
    fill(array);
}

async function getRecettes() {
    const recettesApi = await api.getRecettes();
    recettesData = recettesApi.map((recette) => new Recette(recette));
    display(recettesData);
}

async function main() {
    getRecettes();
}

main();
