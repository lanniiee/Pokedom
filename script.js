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
    let input = document.getElementById("search").value;
    input = input.toLowerCase();
    const clearCard = document.querySelectorAll(".card");
    clearCard.forEach(card => card.remove());

    pokemonArray.forEach((pokemon) => {
        const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        const types = pokemon.types.join(" & ");
        if (input == pokemon.name) {
            cardContainer.innerHTML = 
            `<div class="card">
                <img src="${pokemon.sprite}" class="card__image" id="${name}">
                <div class="card__content">
                    <div class="card__heading">${name}</div>
                <div class="card__text">${name} (#${pokemon.id}) is a ${types} type pokemon.</div>
                </div>
            </div>`;
        }
    })
}

searchInput.addEventListener("input", filterPokemon);
