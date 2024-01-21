// Part 1: Thinking Functionally
//Take an array of numbers and return the sum
let nums = [1,2,3,5,7,10,13,14]

function addAll(anarray){
    let sum = 0
    anarray.forEach(element => {
        sum += element
    });
    return sum;
}

// Take an array of numbers and return the average.
function arrayAvg(anarray){
    let average = addAll(anarray)/anarray.length
    return average
}

// Take an array of strings and return the longest string.
function