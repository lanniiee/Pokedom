//import pokemonArray from pokemon.js
import defaultExport, { pokemonArray } from "./data/pokemon.js"


// Selecting element from HTML
const cardContainer = document.querySelector(".card-container");
const searchInput = document.getElementById("search");

// added in card container to show all objects from array using forEach
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

// filter pokemon by name. At the moment only exact match
const filterPokemon = () => {
    let input = document.getElementById("search").value.toLowerCase();
    const card = document.querySelectorAll(".card");
    card.forEach(card => card.remove());

    pokemonArray.forEach((pokemon) => {
        const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        const types = pokemon.types.join(" & ");
        let result = [];
        if (input == pokemon.name) {
            cardContainer.innerHTML += 
            `<div class="card">
                <img src="${pokemon.sprite}" class="card__image" id="${name}">
                <div class="card__content">
                    <div class="card__heading">${name}</div>
                <div class="card__text">${name} (#${pokemon.id}) is a ${types} type pokemon.</div>
                </div>
            </div>`;
        }
        if (input == pokemon.types[0] || input == pokemon.types[1]) {
            cardContainer.innerHTML += 
            `<div class="card">
                <img src="${pokemon.sprite}" class="card__image" id="${name}">
                <div class="card__content">
                    <div class="card__heading">${name}</div>
                <div class="card__text">${name} (#${pokemon.id}) is a ${types} type pokemon.</div>
                </div>
            </div>`;
        };
    })
}

searchInput.addEventListener("input", filterPokemon);
