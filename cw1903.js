//19.03
//Sum of two lowest positive integers


function sumTwoSmallestNumbers(numbers) {
let first = Math.min(...numbers)
  numbers.splice(numbers.indexOf(first), 1)
  let second = Math.min(...numbers)
  return first + second
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))