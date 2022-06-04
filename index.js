// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
/*function Arrayfunctions(){
function beforeEach() {
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}*/

function destructivelyAppendCat(name) {
    cats.push(name); 
} {
destructivelyAppendCat("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat("Bob");
function destructivelyRemoveLastCat(name){
    cats.pop(name);
}
destructivelyRemoveLastCat();
function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}
destructivelyRemoveFirstCat();
 
function appendCat(name) {
    let newCats = [...cats, name];
    return newCats;
}
appendCat("Broom");

function prependCat(name) {
    let preCats = [name, ...cats];
    return preCats;
}
prependCat("Arnold");

function removeLastCat() {
    let lastCats = cats.slice(0, cats.length - 1);
    return lastCats;
}
removeLastCat();

function removeFirstCat() {
    let firstCats = cats.slice(1);
    return firstCats;
}
removeFirstCat;