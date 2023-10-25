class Api {
    #url;

    constructor(url) {
        this.#url = url;
    }

    async getRecettes() {
        return fetch(this.#url)
            .then((res) => res.json())
            .then((res) => res.recipes)
            .catch((err) => console.log('an error occurs', err));
    }
}
