import defaultExport, { pokemonArray } from "./data/pokemon.js"

const cardContainer = document.querySelector(".card-container");
const searchInput = document.getElementById("search");

let result = [];


pokemonArray.forEach((pokemon) => {
const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
const types = pokemon.types.join(" & ");
cardContainer.innerHTML +=
    `<div class="card">
        <img src="${pokemon.sprite}" class="card__image" id="${name}">
        <div class="card__content">
            <div class="card__heading">${name}</div>
            <div class="card__text">${name} (#${pokemon.id}) is a ${types} type pokemon.</div>
        </div>
    </div>`;
});



