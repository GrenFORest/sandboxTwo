// 24.02
//sum of numbers
function getSum(a,b) {

    let max = Math.max(a,b)
    let min = Math.min(a,b)
    let sum = 0
    return (max-min+1) * (max+min) / 2;

}

console.log(getSum(7,7));
console.log(getSum(-1,2));
console.log(getSum(2,-2));
console.log(getSum(0,-1));