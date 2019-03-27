/* Manejo del DOM */

/* imprimir data en pantalla*/
const addPokemon = (pokemones,ruta) => {
  const root = document.getElementById(ruta);
    for (let i = 0; i < pokemones.length; i++) {
      root.innerHTML += `
        <div> 
          <figure>
            <img src="${pokemones[i].img}" alt="perfil" class="img-profile">
          </figure>
          <p>Number:${pokemones[i].num}</p>
          <h2>Nombre: ${pokemones[i].name}</h2>
          <p>Tipo: ${pokemones[i].type}</p>
          
      </div>
    `; 
  }
  }
  // addPokemon(sortedPokemons(dataPokemon),'root')
  addPokemon(arrImp,'root');
  // addPokemon(dataPokemon,'root');