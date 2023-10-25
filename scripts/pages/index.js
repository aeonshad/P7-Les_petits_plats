const api = new Api('/data/recipes.json');
const recetteSection = document.querySelector('.recette_section');
let recettesData = [];

async function main() {
    const recettesApi = await api.getRecettes();
    recettesData = recettesApi.map((recette) => new Recette(recette));
    recettesData.forEach((recette) => {
        const recetteModel = new RecetteCard(recette);
        recetteSection.appendChild(recetteModel.createRecetteCard());
    });
    count();
    fill();
}

main();
