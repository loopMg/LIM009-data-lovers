//Para acceder al array de objetos con todos los pokemones
const dataPokemon = POKEMON.pokemon; 
/* Codigo que se ve, se copio y no se entiende nunca se aprende*/

// console.log(dataPokemon);

/* Bucle p/recorrer todo el array de POKEMON */  
// let arrPokemons = [];
 //for (let i=0; i<dataPokemon.length; i++) {
   //console.log(dataPokemon[i])
//   arrPokemons += dataPokemon[i];
  //}
//   console.log(arrPokemons);

 /*filtrar data por parametro*/
  const filteredPokemons = (arrData, string) => {
    return arrData.filter(object=> object.type.includes(string));
  }

  const arrFilterPokemons = filteredPokemons(dataPokemon ,'Fire');
  // console.log(arrFilterPokemons);

/*ordenar data de forma ascendente*/
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





  // var filtrar por nombre
  //const filtered = POKEMON.pokemon.filter(filtered=> filtered.name === 'Ivysaur');
  // resultado.innerHTML = filtered[0].name

       //console.log(filtered);
