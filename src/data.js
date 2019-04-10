// Funciones 
// Filtrar data por nombre 
const searchPokemons = (arrData, string) => {
  return arrData.filter(object => object.name === string);
};
window.searchPokemons = searchPokemons;

// filtrar data por parametro tipo 
const filteredPokemons = (arrData, click) => {
  return arrData.filter(object => object.type.includes(click));
};
window.filteredPokemons = filteredPokemons;

// ordenar data de forma ascendente 
const sortedPoke = (arrData, sortOrder) => {
  let pokesOrder = arrData.sort((imp1, imp2) => {
    if (imp1.name > imp2.name) {
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

// calculo aritmetico resta 
const countingPoke = (arrData, inputUser) => {
  const dataBase = arrData.length;
  let result = 0;
  if (inputUser <= 151) {
    result = dataBase - inputUser;
  } else {
    result = ('Wooh!');
  }
  return result;
};

window.countingPoke = countingPoke;
