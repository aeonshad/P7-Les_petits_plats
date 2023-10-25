const number = document.getElementById('number');

async function count() {
    number.innerText = parseInt(recettesData.length, 10) + ' recettes';
}
