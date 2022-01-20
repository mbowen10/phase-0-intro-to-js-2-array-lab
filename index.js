// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
const cats2 = [...cats, "Broom"]
const cats3 = ["Arnold", ...cats]
const copyCat = cats.slice()

function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(){
    return cats2
}
function prependCat(){
    return cats3
}
function removeLastCat(){
    return cats.slice(0, -1)
}
function removeFirstCat(){
    return cats.slice(1)
}