// // Write your solution here!
// const cats = ["Milo", "Otis", "Garfield"];

// function destructivelyAppendCat() {
//   cats.push("Ralph");
// }

// function destructivelyPrependCat() {
//   cats.unshift("Bob");
// }

// function destructivelyRemoveLastCat() {
//   cats.splice(-1);
// }

// function destructivelyRemoveFirstCat() {
//   cats.shift();
// }

// function appendCat(name) {
//   const newArray = [...cats];
//   newArray.push(name);
//   return newArray;
// }

// function prependCat(name) {
//   const newArray = [...cats];
//   newArray.unshift(name);
//   return newArray;
// }

// function removeLastCat() {
//   const newArray = [...cats];
//   newArray.pop();
//   return newArray;
// }

// function removeFirstCat() {
//   const newArray = [...cats];
//   newArray.shift();
//   return newArray;
// }
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push("Ralph");
}

function destructivelyPrependCat() {
  cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  cats.splice(-1);
}

function destructivelyRemoveFirstCat() {
  cats.splice(0, 1);
}

function appendCat(name) {
  const newCatsArray = [...cats];
  newCatsArray.push("Broom");
  return newCatsArray;
}

function prependCat(name) {
  const newPrependedArray = [...cats];
  newPrependedArray.unshift("Arnold");
  return newPrependedArray;
}

function removeLastCat() {
  const oneLessCat = [...cats];
  oneLessCat.splice(-1);
  return oneLessCat;
}

function removeFirstCat() {
  const newArray = [...cats];
  newArray.splice(0, 1);
  return newArray;
}
