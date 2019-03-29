/* Manejo del DOM */

/* container donde se van a pintar los pokemons  */
const boxLine = document.getElementById("pokemons-view");

/* funcion para pintar todos los pokemons */
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
  // printPokemons(arrSortPokemons,boxLine);

/* array de tipos de pokemons */
 const arrTypesPokemons = ['Grass','Poison','Fire','Flying','Water','Ground','Rock','Electric','Psychic','Normal','Ice','Ghost','Fighting','Bug','Dragon']; 

 
/* pintar los botones de tipos de Pokemon */
const containerButtomsType = document.getElementById("buttoms-types");

let stringButtoms = '';
  for(let i=0;i<arrTypesPokemons.length; i++) {
    stringButtoms +=`
        <input type="checkbox" name="type" id=${arrTypesPokemons[i]} value=${arrTypesPokemons[i]}>
        <label for="checkbox">${arrTypesPokemons[i]}</label>
        <br>
    `
  }
containerButtomsType.innerHTML = stringButtoms;

/* pintar pokemons filtrados  segun el tipo seleccionado */
newArrFilter = "";
containerButtomsType.addEventListener('click', (e) => {
  newArrFilter = window.filteredPokemons(dataPokemon,e.target.value);
      let string = '';
        for(let i = 0; i<newArrFilter.length; i++) {
          string += `<div id="poke-box">
                      <img src="${newArrFilter[i].img}" alt="pokemon" class="img-poke"/>
                      <p>${newArrFilter[i].name}</p>
                      <p>${newArrFilter[i].type}</p> </div>
                     `
}
boxLine.innerHTML = string; 
});


/* pintar pokemon buscado por nombre */

const buttomSearch = document.getElementById("buttom-search")
let pokeResultSearch ="";

buttomSearch.addEventListener('click', () => {
  const stringPokeName = document.getElementById('poke-name').value;
   pokeResultSearch = window.searchPokemons(dataPokemon,stringPokeName);
   console.log(pokeResultSearch);
    let stringSearch = '';
      for(let i = 0; i<pokeResultSearch.length; i++) {
        stringSearch += `<div id="poke-box">
        <img src="${pokeResultSearch[i].img}" alt="pokemon" class="img-poke"/>
        <p>${pokeResultSearch[i].name}</p>
        <p>${pokeResultSearch[i].type}</p> </div>
       `
      }
boxLine.innerHTML = stringSearch;
})

