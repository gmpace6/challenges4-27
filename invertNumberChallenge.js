console.log('hello world')

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

let array1 = [1,2,3,4,5]
let arrayNeg1 = []

function invertAll (array1) {
    for (i = 0; i < array1.length; i++) {
       let newNum = array1[i] * -1
        arrayNeg1.push(newNum)
    }
    return arrayNeg1
}
console.log(invertAll(array1))