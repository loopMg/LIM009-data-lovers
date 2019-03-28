/* Manejo del DOM */

// botones
// const buttomFilter = document.getElementById("btm-filter");
// const buttomTypeWater = document.getElementById("btm-Water");
// Eventos de Botones

// buttomTypeWater.addEventListener('click')=> {
//   const 
// }
const boxLine = document.getElementById("pokemons-view");

const printPokemons = (arrData, contenedorHTML) => {
let string = '';
for(let i = 0; i<arrData.length; i++) {
  string += `<div id="poke-box">
                  <img src="${arrData[i].img}" alt="pokemon" class="img-poke"/>
                  <p>${arrData[i].name}</p>
                  <p>${arrData[i].type}</p> </div>
 `
}

contenedorHTML.innerHTML = string; 
}


printPokemons(dataPokemon, boxLine)
// printPokemons(arrFilterPokemons,boxLine)
// printPokemons(arrSortPokemons,boxLine);



/* Esto funciona, me siento cool !!! 
let elementPoke = '';
for(let i = 0; i<dataPokemon.length; i++) {
  elementPoke += `<div>
                  <img src="${dataPokemon[i].img}" alt="pokemon" class="img-poke"/>
                  <p>${dataPokemon[i].name}</p>
                  <p>${dataPokemon[i].type}</p> </div>
 `
}
imp.innerHTML = elementPoke;
*/