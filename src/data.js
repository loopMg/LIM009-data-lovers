/* Const para acceder al array de objetos con todos los pokemones */
const dataPokemon = POKEMON.pokemon; 

/*filtrar data por nombre*/

const searchPokemons = (arrData, string) => {
  return arrData.filter(object=> object.name === string);
}

window.searchPokemons = searchPokemons;

/* filtrar data por parametro tipo */
const filteredPokemons = (arrData, string) => {
  return arrData.filter(object=> object.type.includes(string));
}

window.filteredPokemons = filteredPokemons;

/* ordenar data de forma ascendente */

// const sortedPokemons =(data)=>{
//   let var1=data.sort(function(a,b){
//     if(a.name > b.name) {
//       return 1;
//     } else {
//       return -1;
//    }
//   });
//  return var1;
// } ;

// const arrSortPokemons = sortedPokemons(dataPokemon);
// console.log(sortedPokemons(dataPokemon));




 
