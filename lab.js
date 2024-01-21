// Part 1: Thinking Functionally
//Take an array of numbers and return the sum
let nums = [1,2,3,5,7,10,13,14]
let strs = ["hello","goodbye","good morning","good night","good evening","everyone"]
let longerstrs = [["mew","miao","woof","arfarf","bark bark","warf","arf?arf?arf"],5]
let peopleData = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

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

// Part 2: Thinking Methodically
// Sort the array by age.
function sortByAge(peoplearray) {
    return peoplearray.sort(function(ageOne, ageTwo){return ageOne.age - ageTwo.age})
}

// Filter the array to remove entries with an age greater than 50.
function filter50YearOlds(peoplearray){
    return peoplearray.filter((person) => person.age < 50)
}

// Map the array to change the “occupation” key to “job” and increment every age by 1.
function jobChangeAgeIncrease(peoplearray){
    let peopleMap = peoplearray.map(({id, name, occupation, age}) => ({
        id: id,
        name: name,
        job: occupation,
        age: String(Number(age) + 1)
    }))
    return peopleMap
}

// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.
function reduceAndAVG(peoplearray){
    let ageArray = []
    for(person of peoplearray){
        ageArray.unshift(Number(person.age))
    }
    let sumNum = ageArray.reduce((num,num1) => {
        return num + num1
    })
    let sumAndAverage = [sumNum, sumNum/ageArray.length]
    return sumAndAverage
}

// Part 3: Thinking Critically
// Take an object and increment its age field.
// Take an object, make a copy, and increment the age field of the copy. Return the copy.
// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.

function increaseAge(personObj){
    
}