const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
    return cats;
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
    return cats;
}
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
function appendCat() {
    const appendCat = [...cats, "Broom"];
    return appendCat;
}
function prependCat() {
    const prependCat = ["Arnold", ...cats];
    return prependCat;
}
function removeLastCat() {
    const removeLastCat = cats.slice(0,-1);
    return removeLastCat;
}
function removeFirstCat() {
    const removeFirstCat = cats.slice(1);
    return removeFirstCat;
}