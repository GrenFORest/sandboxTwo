//26.02
//easy logs
function logs(x, a, b) {
    let amount = Math.log(a) + Math.log(b);
    let sum = amount / Math.log(x);
    return sum;
}

console.log(logs(10, 2, 3));
console.log(logs(5, 2, 3));
console.log(logs(1000, 2, 3));

//Be Concise I - The Ternary Operator
function describeAge(a) {
    const mes = "You are a (n) ";
    return (a<=12) ? mes+"kid":
           (a<=17) ? mes+"teenager":
           (a<=64) ? mes+"adult":
           mes + "elderly";
}

console.log(describeAge(15))