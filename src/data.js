/* Funciones*/

/*Filtrar data por nombre*/

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

const sortedPoke = (arrData, sortOrder) => {
  let pokesOrder = arrData.sort((a,b)=> {
    if(a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
  if (sortOrder === 'Az') {
    return pokesOrder;
  } else {
    return pokesOrder.reverse();
  }
};

window.sortedPoke = sortedPoke;


/* calculo aritmetico */

const countingPoke = (arrData, inputUser) => {
    let pokeCoun = 0;
    let result = 0;
      for(let i=0; i<arrData.length;i++) {
        pokeCoun = arrData[i].id;
        if ( inputUser <= 151) {
        result = pokeCoun - inputUser;
      } else {
        result = "Wooh!";
      }
    }
    return result; 
  }



window.countingPoke = countingPoke;



