// 1)write a function called isEven which checks if a number is even or odd
// Hint: 0 is even and 1 is odd, for any other nummber N, its eveness is the same as N-2.
// Notice how this works when N is negative and try to fix it.
function isEven (p) {
  if (p % 2 === 0) {
    console.log(p + ' is even')
  } else {
    console.log(p + ' is odd')
  }
}
isEven(3)

// 2) Write a function called countBs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters are in the string
let count = 0
function countBs (string) {
  for (let g = 0; g < string.length; g++) {
    if (string[g] === 'B') {
      count += 1
    }
  }
  return count
}
console.log(countBs('baBeByBoBUbbbBBBb'))

// 3) function countChar that behaves like countBs expect it takes a second argument that indicates the character that is to be  counted
// let counter = j, k
let counter = 0
function countChar (string, character) {
  for (let k = 0; k < string.length; k++) {
    if (string[k] === character) {
      counter += 1
    }
  }
  return counter
}
console.log(countChar('baBeByBoBUbababaBBBb', 'a'))

// 4) function to generate the first n fibonacci numbers (fib=sum of the first 2 previous numbers)
function fibonacci (n) {
  const fibonacci = [0, 1, 1, 2]
  for (let i = 4; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
  }
  return fibonacci.slice(0, n)
}
console.log(fibonacci(10))

// 6)sum function that takes an array and returns the sum of its elements
// sum([1,2,3,4,5]) => 15
function sum (num) {
  let sum = 0
  for (let c = 0; c < num.length; c++) {
    sum += num[c]
  }
  return sum
}
console.log(sum([1, 2, 3, 4, 5]))

// 7)Write a function to return the average of an array
// average([1,2,3,4,5]) => 3
function calculateAverage (numbers) {
  let sum = 0
  for (let b = 0; b < numbers.length; b++) {
    sum += numbers[b]
  }
  const average = sum / numbers.length
  return average
}
const arrayOfNumbers = [1, 2, 3, 4, 5]
const avg = calculateAverage(arrayOfNumbers)
console.log(avg)

// 8)The == operator compares objects by identity. But sometimes you would prefere to compare the values of their actual properties
// write a function deepEqual that takes 2 values and returns true if only they are of the same value or are objects with the same property.
function deepEqual (d, e) {
  if (d === e) {
    return true
  }
  if (typeof d === 'object' && d !== 0 && typeof e === 'object' && e !== 0) {
    return true
  }
  return false
}
console.log(deepEqual(1, '1'))
