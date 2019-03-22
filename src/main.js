/* Manejo del DOM */


  const root = document.getElementById('root'); 

  const addPokemon = (pokemones) => {
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

addPokemon(dataPokemon);

