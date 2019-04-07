/* Manejo del DOM */

/* Const para acceder al array de objetos con todos los pokemones */
const dataPokemon = POKEMON.pokemon; 

/* container donde se van a pintar los pokemons  */
const boxLine = document.getElementById("pokemons-view");

/* funcion para pintar todos los pokemons */
const printPokemons = (arrData, contenedorHTML) => {
  let string = '';
  for(let i = 0; i<arrData.length; i++) {
    string += `<div class="poke-box">
                    <img src="${arrData[i].img}" alt="pokemon" class="img-poke"/>
                    <h1>${arrData[i].name}</h1>
                    <p>${arrData[i].type}</p> </div>
   `
  }
  contenedorHTML.innerHTML = string; 
  }
  printPokemons(dataPokemon, boxLine)

  /* array de tipos de pokemons */
 const arrTypesPokemons = ['Grass','Poison','Fire','Flying','Water','Ground','Rock','Electric','Psychic','Normal','Ice','Ghost','Fighting','Bug','Dragon']; 

 
/* pintar los botones de tipos de Pokemon */
const btnPrintBtnsType = document.getElementById('print-btn-type');
const containerButtomsType = document.getElementById("buttons-types");

btnPrintBtnsType.addEventListener('click', () =>{
  let stringButtoms = '';
  for(let i=0;i<arrTypesPokemons.length; i++) {
    stringButtoms +=`<button type="button" name="type" class="button" value=${arrTypesPokemons[i]}>
    ${arrTypesPokemons[i]}</button>
    `
  }

containerButtomsType.innerHTML = stringButtoms;
})


/* pintar pokemons filtrados  segun el tipo seleccionado */
newArrFilter = "";
containerButtomsType.addEventListener('click', (e) => {
  newArrFilter = window.filteredPokemons(dataPokemon,e.target.value);
      let string = '';
        for(let i = 0; i<newArrFilter.length; i++) {
          string += `<div class="poke-box">
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
        stringSearch += `<div class="poke-box">
        <img src="${pokeResultSearch[i].img}" alt="pokemon" class="img-poke"/>
        <p>${pokeResultSearch[i].name}</p>
        <p>${pokeResultSearch[i].type}</p> </div>
       `
      }
boxLine.innerHTML = stringSearch;
})

/* pintar pokemons ordenados de forma Ascendente o Descendente */

const buttomSortUp = document.getElementById("buttom-upward");
const buttomSortFall = document.getElementById("buttom-falling");

let pokeResultSort = '';

buttomSortUp.addEventListener('click', () => {
  pokeResultSort = window.sortedPoke(dataPokemon, 'Az');
    let stringSort = '';
    for(let i = 0; i<pokeResultSort.length; i++) {
      stringSort += `<div class="poke-box">
      <img src="${pokeResultSort[i].img}" alt="pokemon" class="img-poke"/>
      <p>${pokeResultSort[i].name}</p>
      <p>${pokeResultSort[i].type}</p> </div>
     `
    }
boxLine.innerHTML = stringSort;
})

buttomSortFall.addEventListener('click', () => {
  pokeResultSort = window.sortedPoke(dataPokemon, 'Za');
    let stringSort = '';
    for(let i = 0; i<pokeResultSort.length; i++) {
      stringSort += `<div class="poke-box">
      <img src="${pokeResultSort[i].img}" alt="pokemon" class="img-poke"/>
      <p>${pokeResultSort[i].name}</p>
      <p>${pokeResultSort[i].type}</p> </div>
     `
    }
boxLine.innerHTML = stringSort;
})


/* pintar calculo aritmetico resta */
const buttomResult = document.getElementById('buttom-result');
const containerResult = document.getElementById('num-result');

buttomResult.addEventListener('click', ()=>{
  const userNum = document.getElementById('numbers-poke').value;
  const parsear = parseInt(userNum);
  let result = countingPoke(dataPokemon,parsear);
  containerResult.innerHTML = `<p class="counting-result"> ¡Solo te faltan ${result}!</p>`
})


