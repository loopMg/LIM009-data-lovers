global.window = global;
require('../src/data.js');
// require('./data.spec.js');

const data = {
  'pokemon': [{
    'name': 'Blastoise',
    'type': 'Water'
  }, {
    'name': 'Abra',
    'type': 'Psychic'
  }, {
    'name': 'Charmeleon',
    'type': 'Fire'
  }]
};
const input = data.pokemon;

const outputOne = [{
  'name': 'Blastoise',
  'type': 'Water'
}];

describe('searchPokemons', () => {
  it('deberia ser una funcion', () => {
    expect(typeof window.searchPokemons).toBe('function');
  });
  it('deberia retornar output para output', () => { 
    expect(window.searchPokemons(input, 'Blastoise')).toEqual(outputOne);
  });
});

const outputTwo = [{
  'name': 'Charmeleon',
  'type': 'Fire'
}];

describe('filteredPokemons', () => {
  it('deberia ser una funcion', () => {
    expect(typeof window.filteredPokemons).toBe('function');
  });
  it('deberia retonar pokemon tipo Fuego', () => {
    expect(window.filteredPokemons(input, 'Fire')).toEqual(outputTwo);
  });
});

const outputThree = [{
  'name': 'Abra',
  'type': 'Psychic'
}, { 
  'name': 'Blastoise',
  'type': 'Water'
}, {
  'name': 'Charmeleon',
  'type': 'Fire',
}];

describe('sortedPoke', () => {
  it('deberia ser una funcion', () => {
    expect(typeof window.sortedPoke).toBe('function');
  });
//   it('deberia ordenar data A-Z', () => {
//     expect(window.sortedPoke(input, 'A')).toEqual(outputThree)
//   });
// });

describe('countingPoke', () => {
  it('deberia ser una funcion', () => {
    expect(typeof window.countingPoke).toBe('function');
  });
});  
