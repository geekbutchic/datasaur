/********************
 * HELPER FUNCTIONS *
 ********************/
const makeDino = function (newSpecies, newPeriod, newCarnivore, newExtinct = false) {
  return {
    species: newSpecies,
    period: newPeriod,
    carnivore: newCarnivore,
    extinct: newExtinct
  }
}

const makeSingular = function (dinosaur) {
  if (dinosaur.species.endsWith('us')) {
    return makeDino(dinosaur.species.slice(0, -2), dinosaur.period, dinosaur.carnivore, dinosaur.extinct)
  } else {
    return makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, dinosaur.extinct)
  }
}

const truncateSpecies = function (dinosaur) {
  const newDino = makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, dinosaur.extinct);

  if (newDino.species.length >= 10) {
    newDino.species = newDino.species.slice(0, 7) + '...';
  }
  return newDino;
}

const makeExtinct = function (dino) {
  return makeDino(dino.species, dino.period, dino.carnivore, true)
}

const isCarnivore = function (dino) {
  return (dino.carnivore === true)
} 

const isHerbivore = function (dino) {
  return (dino.carnivore === false)
}

const isExtinct = function (dino) {
  return (dino.extinct === true)
}

const isNotExtinct = function (dino) {
  return (dino.extinct === false)
} 

const isTriassic = function (dino) {
  return (dino.period === 'Triassic')
}

const isJurassic = function (dino) {
  return (dino.period === 'Jurassic')
}

const isCretaceous = function (dino) {
  return (dino.period === 'Cretaceous')
}


/***********************
 * ITERATION FUNCTIONS *
 **********************/

const singularizeDinos = function (dinosaurs) {
  const newDino = [];

  for (const dinosaur of dinosaurs) {
    newDino.push(makeSingular(dinosaur));
  }
  return newDino;
}

const truncateDinos = function (dinosaurs) {
  const newDino = [];

  for (const dinosaur of dinosaurs) {
    newDino.push(truncateSpecies(dinosaur));
  }

  return newDino;
}

const makeAllExtinct = function (dinosaurs) {
  const newDino = [];

  for (const dino of dinosaurs) {
    newDino.push(makeExtinct(dino));
  }
  return newDino;
}

const carnivoresOnly = function (dinosaurs) {
  const newDino = [];

  for (const dino of dinosaurs) {
    if (isCarnivore(dino)) {
      newDino.push(dino)
    }
  }
  return newDino;
}
// For this one I think this test is not working.
// I did not fork and clone the new one.

const herbivoresOnly = function (dinosaurs) {
  const newDino = [];

  for (const dino of dinosaurs) {
    if (isHerbivore(dino)) {
      newDino.push(dino)
    }
  }
  return newDino;
}

const extinctOnly = function (dinosaurs) {
  const newDino = [];

  for (const dino of dinosaurs) {
    if (isExtinct(dino)) {
      newDino.push(dino)
    }
  }
  return newDino;
}

const notExtinct = function (dinosaurs) {
  const newDino = [];

  for (const dino of dinosaurs) {
    if (isNotExtinct(dino)) {
      newDino.push(dino)
    }
  }
  return newDino;
}

const triassicOnly = function (dinosaurs) {
  const newDino = [];

  for (const dino of dinosaurs) {
    if (isTriassic(dino)) {
      newDino.push(dino)
    }
  }
  return newDino;
}

const notTriassic = function (dinosaurs) {
  const newDino = [];

  for (const dino of dinosaurs) {
    if (isJurassic(dino) || (isCretaceous(dino))) {
      newDino.push(dino)
    }
  }
  return newDino;
}

/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

if (typeof makeDino === 'undefined') {
  makeDino = undefined
}

if (typeof makeSingular === 'undefined') {
  makeSingular = undefined
}

if (typeof truncateSpecies === 'undefined') {
  truncateSpecies = undefined
}

if (typeof makeExtinct === 'undefined') {
  makeExtinct = undefined
}

if (typeof isCarnivore === 'undefined') {
  isCarnivore = undefined
}

if (typeof isExtinct === 'undefined') {
  isExtinct = undefined
}

if (typeof isNotExtinct === 'undefined') {
  isNotExtinct = undefined
}

if (typeof isTriassic === 'undefined') {
  isTriassic = undefined
}

if (typeof isJurassic === 'undefined') {
  isJurassic = undefined
}

if (typeof isCretaceous === 'undefined') {
  isCretaceous = undefined
}

if (typeof singularizeDinos === 'undefined') {
  singularizeDinos = undefined
}

if (typeof truncateDinos === 'undefined') {
  truncateDinos = undefined
}

if (typeof makeAllExtinct === 'undefined') {
  makeAllExtinct = undefined
}

if (typeof carnivoresOnly === 'undefined') {
  carnivoresOnly = undefined
}

if (typeof herbivoresOnly === 'undefined') {
  herbivoresOnly = undefined
}

if (typeof extinctOnly === 'undefined') {
  extinctOnly = undefined
}

if (typeof notExtinct === 'undefined') {
  notExtinct = undefined
}

if (typeof triassicOnly === 'undefined') {
  triassicOnly = undefined
}

if (typeof notTriassic === 'undefined') {
  notTriassic = undefined
}


module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isHerbivore,
  isExtinct,
  isNotExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
}
