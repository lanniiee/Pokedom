import defaultExport, { pokemonArray } from "./data/pokemon.js"

const cardContainer = document.querySelector(".card-container");
const searchInput = document.getElementById("search");

let result = [];

const displayPokemon = () => {
    pokemonArray.forEach((pokemon) => {
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const types = pokemon.types.join(" & ");
    cardContainer.innerHTML +=
    `<div class="card">
            <img src="${pokemon.sprite}" class="card__image">
            <div class="card__content">
                <div class="card__heading">${name}</div>
                <div class="card__text">${name} (#${pokemon.id}) is a ${types} type pokemon.</div>
            </div>
    </div>`;
});
};

displayPokemon(pokemonArray);

searchInput.addEventListener("input", (e) => {
    const searchStr = e.target.value;
    const result = pokemonArray.filter((pokemon) => {
        if (pokemon.name == searchStr || pokemon.types.includes(`${searchStr}`)) {
            return true;
        } else {
            return false;
        }
    });
    displayPokemon(result);
    console.log(result);
});

