const number = document.getElementById('number');

async function count(array) {
    number.innerText = parseInt(array.length, 10) + ' recette(s)';
}
