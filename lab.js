// Part 1: Thinking Functionally
//Take an array of numbers and return the sum
let nums = [1,2,3,5,7,10,13,14]
let strs = ["hello","goodbye","good morning","good night","good evening","everyone"]
let longerstrs = [["mew","miao","woof","arfarf","bark bark","warf","arf?arf?arf"],5]

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
function longestStr(anarray) {
    let wordCheck = []
    anarray.forEach(word => {
       wordCheck.unshift(word.length)
    })
    let longest = Math.max(...wordCheck)
    let longWords = anarray.filter((word) => word.length == longest);
    return longWords
}

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function findLongStrings(anarray){
    let minLength = anarray[1]
    let words = anarray[0]
    let longerWords = words.filter((word) => word.length > minLength)
    return longerWords
}

// Take a number, n, and print every number between 1 and n without using loops.
function oneToNumber(anumber) {
    console.log(anumber)
    let decreaseNum = anumber - 1
    
    if (decreaseNum > 0) {
        oneToNumber(decreaseNum);
    }
}

oneToNumber(10)