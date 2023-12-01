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

// 5)function range that takes 2 arguments start and end and returns an array containing all the numbers from start up to end
function range (start, end) {
  const newArray = []
  for (let l = start; l <= end; l++) {
    newArray.push(l)
  }
  return newArray
}
console.log(range(1, 10))

// 6)write stepRange that acts like range but takes an extra increment or decrement parameter
// stepRange(1, 10, 2) => [1,3,5,7,9]
// stepRange(5, 1, -1) => [5,4,3,2,1]
function stepRange (starts, ends, step) {
  const ranges = []
  for (let r = starts; r <= ends; r += step) {
    ranges.push(r)
  }
  return ranges
}
console.log(stepRange(1, 10, 2))

// 7)combine both functions in trueRange
// trueRange(1, 5) => [1, 2, 3, 4, 5]
// trueRange(1, 10, 2) => [1, 3, 5, 7, 9]
// trueRange(5, 2, -1) => [5, 4, 3, 2]
function trueRange (starting, ending, step = 1) {
  const result = []
  if (step > 0) {
    for (let w = starting; w <= ending; w += step) {
      result.push(w)
    }
  }
  if (step < 0) {
    for (let w = starting; w >= ending; w += step) {
      result.push(w)
    }
  }
  return result
}
console.log(trueRange(5, 2, -1))

// 8)sum function that takes an array and returns the sum of its elements
// sum([1,2,3,4,5]) => 15
function sum (num) {
  let sum = 0
  for (let c = 0; c < num.length; c++) {
    sum += num[c]
  }
  return sum
}
console.log(sum([1, 2, 3, 4, 5]))

// 9)Write a function to return the average of an array
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

// 10)The == operator compares objects by identity. But sometimes you would prefere to compare the values of their actual properties
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
