fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon')
	.then((res) => res.json()).then((data) => {console.log(data)})
	.catch((err) => console.log(`There was an error: ${err}`));
