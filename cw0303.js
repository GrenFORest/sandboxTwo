//03.03
function reverseWord(str) {
    return str.split(' ').map(word=>word.split('').reverse().join('')).join(' ');
}

console.log(reverseWord('JavaScript'));
console.log(reverseWord('q w e r t y'));

//***
//convertNumberToReversedArrayOfDigits

function digitize(n) {
    return n.toString().split('').reverse().map(Number);
 }

 console.log(digitize(35231));