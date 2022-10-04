import defaultExport, { pokemonArray } from "./data/pokemon.js"

const cardContainer = document.querySelector(".card-container");


pokemonArray.forEach((pokemon) => {
    console.log(pokemon.types);
    cardContainer.innerHTML +=
    `<div class="card">
            <img src="${pokemon.sprite}" class="card__image">
            <div class="card__content">
                <div class="card__heading">${pokemon.name}</div>
                <div class="card__text">${pokemon.name} (#${pokemon.id}) is a ${pokemon.types} type pokemon.</div>
            </div>
    </div>`;
});