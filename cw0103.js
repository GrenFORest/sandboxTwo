//01.03
//square(n)Sum

function sqareSum(numbers) {
    let sum = 0;
    for(i=0;i<numbers.length;i++) {
        let squaredNumber = Number(numbers[i]**2);
        sum = sum + squaredNumber;
    }
    return sum;
}

console.log(sqareSum([12, 32],54))

//returnNegative

function makeNegative(num) {
    if(num <=0) {
        return num;
    } else {
        return -num;
    }
}

console.log(makeNegative(0.12))

//2 Clock

function past(h, m, s) {
    return ((h * 3600) + (m * 60) + s) * 1000;
}

console.log(past(11, 2 ,8));