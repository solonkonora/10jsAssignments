// 1)write a function called isEven which checks if a number is even or odd
// Hint: 0 is even and 1 is odd, for any other nummber N, its eveness is the same as N-2.
// Notice how this works when N is negative and try to fix it.
function isEven(n) {
    if (n % 2 === 0) {
        console.log(n + ' is even')
    } else {
        console.log(n + ' is odd')
    }
}
isEven(2)

// // 2) Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters are in the string
// function countBs (string) {
// }

//7)Write a function to return the average of an array
//average([1,2,3,4,5]) => 3
function calculateAverage(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    const average = sum / numbers.length
    return average;
}
const arrayOfNumbers = [1, 2, 3, 4, 5]
const avg = calculateAverage(arrayOfNumbers)
console.log(avg)

