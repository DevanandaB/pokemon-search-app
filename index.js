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
