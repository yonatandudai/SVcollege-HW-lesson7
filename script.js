"use strict"

//Part A- Arrays:
//Q1.
function reverseSortArr(arr){
    let swapped = true;
    while (swapped){
        swapped = false;
        for (let i=0; i < arr.length-1; i++){
            if (arr[i] < arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    }
}

const numbers = [5, 2, 9, 1, 7];
reverseSortArr(numbers);
console.log(numbers); // Outputs: [9, 7, 5, 2, 1]

//Q2.
function commonValues(arr1, arr2) {
    let short = arr1;
    let long = arr2;
    let commonArr = [];

    if (arr1.length > arr2.length) {
        long = arr1;
        short = arr2;
    }

    // Iterate through the shorter array
    for (let i = 0; i < short.length; i++) {
        let item = short[i];
        let foundInLong = false;

        // Check if item exists in the longer array
        for (let j = 0; j < long.length; j++) {
            if (item === long[j]) {
                foundInLong = true;
                break;
            }
        }

        // Check if item is already in commonArr
        let alreadyInCommon = false;
        for (let k = 0; k < commonArr.length; k++) {
            if (item === commonArr[k]) {
                alreadyInCommon = true;
                break;
            }
        }

        // Add item to commonArr if it is in both arrays and not a duplicate
        if (foundInLong && !alreadyInCommon) {
            commonArr.push(item);
        }
    }

    return commonArr;
}

const arr1 = [1, 2, 1, 2, 1];
const arr2 = [2, 2, 2, 1, 3, 1, 2];
const result = commonValues(arr1, arr2);
console.log(result); // Outputs: [1, 2]

//Q3.
function twoDimensionalArr(arr){
    let sum = 0;
    let avg = 0;
    for (let i=0; i<arr.length; i++){
        let innerArr = arr[i];
        let innerAvg = 0;
        for (let j=0; j<innerArr.length; j++){
            sum += innerArr[j];
            innerAvg = sum / innerArr.length;
        }
        sum = 0;
        avg += innerAvg / arr.length;
    }
    return avg;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9], 
    [2, 3, 4]
];

console.log(twoDimensionalArr(matrix))

//Q4.
function popLonelyNum(arr, num) {
    let counter = 0;
    let helperArr = [];

    // Iterate from the end to the beginning
    for (let i = arr.length - 1; i >= 0; i--) {
        let currNum = arr.pop(); // Remove the last element
        if (currNum === num) {
            counter++; // Increment counter if it's the target number
        } else {
            helperArr.push(currNum); // Otherwise, store it in the helper array
        }
    }

    // Restore the original array in reverse order
    while (helperArr.length > 0) {
        arr.push(helperArr.pop());
    }

    return {count: counter, array: arr };
}


const numbers1 = [1,2,3,2,4,5,2,6];
const result1 = popLonelyNum(numbers1, 2);
console.log(result1.count); // Outputs: 3
console.log(result1.array); // Outputs: [1, 3, 4, 5, 6]

//Part B- Arrow function:
//Q1.
let checkLen = (str) => {
    return str.length > 5;
};

console.log(checkLen("Yonatan"));

//Q2.
let firstAndLast = (str) => {
    return str[0] === str[str.length-1];
};

console.log(firstAndLast("abra"));

//Q3.
let isUppercase = (str) => {
    let lastChar = str[str.length-1];
    return lastChar === lastChar.isUppercase;
};

console.log(isUppercase("Hello"));

//Part C- Map/forEach:
//Q1.
let arr = [4, 7, 9, 18, 20, 25, 30];
let hasDivisible = false;
arr.forEach((item, i, arr)=>{
    if (item % 3 === 0){
        console.log(`number: ${item}, index: ${i}`);
        hasDivisible = true;
    }
    if (!hasDivisible) {
        console.log("The array is not divisible by 3");
    }
});

//Q2.
let letters = ['A', 'B', 'c', 'd', 'E'];
let newLetters = letters.map((char, i, letters) => {
    if (char === char.toUpperCase()) {
        return 'U'
    }
    return 'L';
});

console.log(newLetters);

//Q3.
let myArr = ['a', 'b', 'c', 'd', 'e', 'f'];
myArr = myArr.map((char, i, myArr) => {
    if (i % 2 == 0) {
        return i
    }
    return char;
})

console.log(myArr);

//Part D- Filter:
//Q1.
const ages = [4, 50, 7, 30, 10, 42, 13, 66, 17, 19, 75];

let afterFilter = ages.filter((age)=>
	(age > 18)
);

console.log(afterFilter);

//Q2.
const myNumbers = [2,4,1,2,7,2,8];
let myNewNubers = myNumbers.filter((item, i, myNumbers) =>
    (i!=3)
);

console.log(myNewNubers);

//Part E- Spread:
//Q1.
let names = ['shem', 'max', 'dor', 'eli', 'orgad'];
function addName(name){
    names = [...names, name];
}

addName('Yonatan');
console.log(names);

//Q2.
function unitedNames(names1, names2){
    let united = [];
    united = [...names1, ...names2];
    return united;
}

const names1 = ['shem', 'max', 'dor'];
const names2 = ['eli', 'orgad', 'Yonatan'];
console.log(unitedNames(names1, names2));