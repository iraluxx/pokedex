const poke_container = document.getElementById
('poke_container');
const pokemons_number = 150;


const fetchPokemons = async () => {
    for (let i = 1; i<= pokemons_number; i++) {
        await getPokemon(i);
    }
};

//  new function that loops through a for loop. calling the function from inside it with the 
const getPokemon = async id => {
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon); // new function, creating new div with class pokemon
}
 
// new function createPokemonCard, creating a new div
const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const { id, name, sprites, types } = pokemon;
    const type = types[0].type.name;
    const pokeInnerHTML = `
        <div class="img-container">
            <img src="${sprites.front_default}" alt="${name}" />
        </div>
        <div class = "info">
            <span class="number">${id}</span>
            <h3 class ="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
}


// completing the pokeInnerHTML and showing the image, id, name, type
fetchPokemons();