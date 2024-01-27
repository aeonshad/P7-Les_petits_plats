/**
 * Classe représentant la carte d'une recette, utilisée pour afficher les détails de la recette.
 */
class RecetteCard {
    #recette;

    /**
     * Constructeur de la classe RecetteCard.
     * @param {Object} recette - L'objet recette à afficher dans la carte.
     */
    constructor(recette) {
        this.#recette = recette;
    }

    /**
     * Méthode qui crée la carte d'une recette avec les détails fournis.
     * @returns {HTMLArticleElement} Le wrapper contenant la carte de la recette.
     */
    createRecetteCard() {
        const $wrapper = document.createElement('article');
        $wrapper.setAttribute('class', 'recette-card');
        $wrapper.innerHTML = `
        <img class="recette-card-image">
                    <div class="recette-card-content">
                        <h2 class="recette-card-title font-title2"></h2>
                        <h3 class="recette-card-subtitle font-subtitle">Recette</h3>
                        <p class="recette-card-text font-text"></p>
                        <h3 class="recette-card-subtitle font-subtitle">Ingrédients</h3>
                        <div class="recette-card-ingredient"></div>
                    </div>
        `;

        $wrapper.querySelector('.recette-card-image').setAttribute('src', `images/recettes/${this.#recette.image}`);
        $wrapper.querySelector('.recette-card-image').setAttribute('alt', this.#recette.name);
        $wrapper.querySelector('.recette-card-title').innerText = this.#recette.name;
        $wrapper.querySelector('.recette-card-text').innerText = this.#recette.description;

        const $ingredientCard = $wrapper.querySelector('.recette-card-ingredient');

        this.#recette.ingredients.map((ingredient) => {
            const $wrapperIngredient = document.createElement('div');
            $wrapperIngredient.setAttribute('class', 'recette-card-ingredient-content');

            $wrapperIngredient.innerHTML = `<h4 class="recette-card-ingredient-subtitle font-subtitle2"></h4>
            <p class="recette-card-ingredient-text font-text2"></p>`;

            $wrapperIngredient.querySelector('.recette-card-ingredient-subtitle').innerText = ingredient.ingredient;
            $wrapperIngredient.querySelector('.recette-card-ingredient-text').innerText = ingredient.quantity
                ? `${ingredient.quantity}${ingredient.unit || ''}`
                : '-';
            $ingredientCard.appendChild($wrapperIngredient);
        });

        return $wrapper;
    }
}
