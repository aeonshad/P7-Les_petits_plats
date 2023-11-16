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
        const recetteCard = `
        <img class="recette-card-image" src="images/recettes/${this.#recette.image}" alt="${this.#recette.name}">
                    <div class="recette-card-content">
                        <h2 class="recette-card-title font-title2">${this.#recette.name}</h2>
                        <h3 class="recette-card-subtitle font-subtitle">Recette</h3>
                        <p class="recette-card-text font-text">${this.#recette.description}</p>
                        <h3 class="recette-card-subtitle font-subtitle">Ingrédients</h3>
                        <div class="recette-card-ingredient">
                        ${this.#recette.ingredients
                            .map(
                                (ingredient) => `
                                <div class="recette-card-ingredient-content">
                                    <h4 class="recette-card-ingredient-subtitle font-subtitle2">${ingredient.ingredient}</h4>
                                    <p class="recette-card-ingredient-text font-text2">${
                                        ingredient.quantity ? `${ingredient.quantity}${ingredient.unit || ''}` : '-'
                                    }
                                </div>`
                            )
                            .join('')}
                        </div>
                    </div>
        `;
        $wrapper.innerHTML = recetteCard;
        return $wrapper;
    }
}
