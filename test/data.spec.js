global.window = global;
require('../src/data.js');
// require('./data.spec.js');

const input = [{
  'name': 'Blastoise',
  'type': 'Water'
}, {
  'name': 'Abra',
  'type': 'Psychic'
}, {
  'name': 'Charmeleon',
  'type': 'Fire'
}];

const outputOne = [{
  'name': 'Blastoise',
  'type': 'Water'
}];

describe('searchPokemons', () => {
  it('deberia ser una funcion', () => {
    expect(typeof global.searchPokemons).toBe('function');
  });
  it('deberia retornar output para output', () => { 
    expect(global.searchPokemons(input, 'Blastoise')).toEqual(outputOne);
  });
});

const outputTwo = [{
  'name': 'Charmeleon',
  'type': 'Fire'
}];

describe('filteredPokemons', () => {
  it('deberia ser una funcion', () => {
    expect(typeof global.filteredPokemons).toBe('function');
  });
  it('deberia retonar pokemon tipo Fuego', () => {
    expect(global.filteredPokemons(input, 'Fire')).toEqual(outputTwo);
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

const outputFour = [{
  'name': 'Charmeleon',
  'type': 'Fire',
}, {
  'name': 'Blastoise',
  'type': 'Water'
}, {
  'name': 'Abra',
  'type': 'Psychic'
}];

describe('sortedPoke', () => {
  it('deberia ser una funcion', () => {
    expect(typeof global.sortedPoke).toBe('function');
  });
  it('deberia ordenar data A-Z', () => {
    expect(global.sortedPoke(input, 'Az')).toEqual(outputThree);
  });
  it('deberia ordenar data Z-A', () => {
    expect(global.sortedPoke(input, 'Za')).toEqual(outputFour);
  });
});

describe('countingPoke', () => {
  it('deberia ser una funcion', () => {
    expect(typeof global.countingPoke).toBe('function');
  });
  it('deberia restar y retornar 2', () => {
    expect(global.countingPoke(input, 1)).toEqual(2);
  });
  it('deberia retornar string "Wooh!"', () => {
    expect(global.countingPoke(input, 4)).toEqual('Wooh!');
  });
});
