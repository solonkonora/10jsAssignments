// 1)write a function called isEven which checks if a number is even or odd
// Hint: 0 is even and 1 is odd, for any other nummber N, its eveness is the same as N-2.
// Notice how this works when N is negative and try to fix it.
function isEven (n) {
  if (n % 2 === 0) {
    console.log(n + ' is even')
  } else {
    console.log(n + ' is odd')
  }
}
isEven(2)
