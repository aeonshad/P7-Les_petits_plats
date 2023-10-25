class Recette {
    #id;

    #image;

    #name;

    #servings;

    #ingredients;

    #time;

    #description;

    #appliance;

    #ustensils;

    constructor(data) {
        this.#id = data.id;
        this.#image = data.image;
        this.#name = data.name;
        this.#servings = data.servings;
        this.#ingredients = data.ingredients;
        this.#time = data.time;
        this.#description = data.description;
        this.#appliance = data.appliance;
        this.#ustensils = data.ustensils;
    }

    get id() {
        return this.#id;
    }

    get image() {
        return this.#image;
    }

    get name() {
        return this.#name;
    }

    get servings() {
        return this.#servings;
    }

    get ingredients() {
        return this.#ingredients;
    }

    get time() {
        return this.#time;
    }

    get description() {
        return this.#description;
    }

    get appliance() {
        return this.#appliance;
    }

    get ustensils() {
        return this.#ustensils;
    }
}
