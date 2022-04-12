//Given an array of integers, return a new array with each value doubled.

//For example:

//[1, 2, 3] --> [2, 4, 6]

function doubled(arr){
    return arr.map(e => e*2)
}

let jar = doubled([2,3,4])
console.log(jar)