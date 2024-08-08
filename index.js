const apiUrl = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';

const searchInput = document.querySelector("search-input");
const searchBtn = document.querySelector("search-btn");

const pokemonName = document.querySelector("pokemon-name");
const pokemonId = document.querySelector("pokemon-id"); 
const pokemonWeight = document.querySelector("pokemon-weight"); 
const pokemonHeight = document.querySelector("pokemon-height"); 
const imgContainer = document.querySelector("img-container");
const types = document.querySelector("types");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const selfAttack = document.getElementById("self-attack");
const selfDefense = document.getElementById("self-defense");
const speed = document.getElementById("speed");

const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

// searchBtn.addEventListener("click", () => {
//     let input = searchInput.value;
//     if(input == "1") {
//         pokemonName.textContent = 'BULBASAUR';
//         pokemonId.innerText = '#1'; 
//         pokemonWeight.innerText = 'Weight: 69';
//         pokemonHeight.innerText = 'Height: 7'; 
//         imgContainer.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
//         types.innerText = 'GRASS', "POSION";
//     } else {
//         alert("the others");
//     }
// });