let arrayParaTodos = []


// Método Map ---------

const arrayMap = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento na posição do index e de que array ele veio
function callbackMap(element, index, array) {
  return `Número ${element} no index: ${index}, veio desse array: ${array}`;
}

function map(array, callback) {
  for (let i = 0; i < array.length; i++) {
    arrayParaTodos.push(callback(array[i], i, array))
  }
  return arrayParaTodos
}

// console.table(map(arrayMap, callbackMap));

//Método Filter ---------

const arrayFilter = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento que for maior que 2
function callbackFilter(element, index, array) {
  if (element > 2 && index && array.length > 2) {
    return true;
  }
}

function filter(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let index = i
    if (callback(array[index], index, array)) {
      arrayParaTodos.push(array[index])
    }

  }
  return arrayParaTodos
}

// console.log(filter(arrayFilter, callbackFilter));

//Método Reduce ---------

const arrayReduce = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas soma os valores, como um acumulador mesmo
function callbackReduce(acumulator, valorAtual) {
  return 0

}

function reduce(array, callback, initialValue = 0) {
  for (let i = 0; i < array.length; i++) {
    initialValue += array[i]
  }
  return initialValue + callback()
}

// console.log(reduce(arrayReduce, callbackReduce));
// console.log(reduce(arrayReduce, callbackReduce, 50));
