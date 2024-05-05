const consultarPokemon = (id, number) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
        pintarPokemon(data, number);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
};

const btnSeleccionar = () => {
    let primerPokemon = Math.round(Math.random() * 150);
    let segundoPokemon = Math.round(Math.random() * 150);
    consultarPokemon(primerPokemon, 1);
    consultarPokemon(segundoPokemon, 2);
};

btnSeleccionar();

const lista = document.getElementById("listarpokemon");

const pintarPokemon = (data, number) => {
    
    let divPokemon = document.getElementById(`pok-${number}`);
    
    let img = divPokemon.querySelector("img");
    let p = divPokemon.querySelector("p");
    
    
    img.src = data.image;
    p.textContent = data.name;
};
