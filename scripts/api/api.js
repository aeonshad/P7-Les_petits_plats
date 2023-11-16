// Déclaration de la classe Api, utilisée pour effectuer des requêtes API sur les recettes.
class Api {
    #url;

    /**
     * Constructeur de la classe Api.
     * @param {string} url - L'URL de l'API pour récupérer les données des recettes.
     */
    constructor(url) {
        this.#url = url;
    }

    /**
     * Effectue une requête GET pour récupérer les données des recettes depuis l'API.
     * @returns {Promise<Array>} Une promesse qui résout avec un tableau de recettes ou rejette avec une erreur.
     */
    async getRecettes() {
        return fetch(this.#url)
            .then((res) => res.json())
            .then((res) => res.recipes)
            .catch((err) => console.log('an error occurs', err));
    }
}
