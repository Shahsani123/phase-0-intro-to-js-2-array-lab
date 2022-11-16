// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
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

function appendCat(name) {
    let appendCat = [...cats, name];
    return appendCat;
}

function prependCat(name) {
    let prependCat = [name, ...cats]
    return prependCat;
}

function removeLastCat() {
    let removeLastCat_1 = cats.slice(0, cats.length - 1)
    return removeLastCat_1;
}

function removeFirstCat() {
    let removeFirstCat_1 = cats.slice(1)
    return removeFirstCat_1;
}