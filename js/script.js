const pokeContainer = document.querySelector(".pokemon_container");
const pokemonContagem = 350;

const cores = {
    fire: '#FB6C6C',
    grass: '#57e1c1eb',
    electric: '#FFB87D',
    water: '#66aef2',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const mainTypes = Object.keys(cores);



const pegarPokemons = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const resp = await fetch(url)
    const data = await resp.json()
    criarPokemonCard(data)

    
}

const fetchPokemons = async () => {

    for (let i = 1; i <= pokemonContagem; i++) {
        await pegarPokemons(i)
    }

};

const criarPokemonCard = (poke) => {
    const card = document.createElement('div')
    card.classList.add("pokemon")

    const name = poke.name[0].toUpperCase() + poke.name.slice(1)
    const id = poke.id.toString().padStart(3, '0')

    const tiposPokemon = poke.types.map(type => type.type.name)
    const tipos = mainTypes.find(type => tiposPokemon.indexOf(type) > -1)

    const cor = cores[tipos]

    card.style.backgroundColor = cor

    card.style.tipos

    const pokemonInnerHTML = ` 
    <div class="image_pokemon">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="${name}">
    </div>
    <div class="informacoes">
        <span class="numero">#${id}</span>
        <h3 class="nome">${name}</h3>
        <small class="tipo"><span>${tipos}</span></small>
        <small class="tipo"><span>${tipos}</span></small>
    </div>
    `
    console.log(pokemonInnerHTML)
    console.log(card)
    console.log(pokeContainer)
    card.innerHTML = pokemonInnerHTML
    console.log(card)
    pokeContainer.appendChild(card)
}

fetchPokemons();

// pokemon_container = pokeContainer

// pokemon = pokemon