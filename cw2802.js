//28.02
//calculate BMI

function bmi(weight, height) {

    const bmi = Number(weight / (height * height)).toFixed(1);
    return bmi <= 18.5 ? "Underweigth": bmi <= 25.0 ? "Normal": bmi <= 30.0 ? "Overweigth": "Obese";
}

console.log(bmi(8,1.76))
console.log(bmi(80,1.82))
console.log(bmi(800,2))

//beginner_lostWithoutAMap
let x = [1, 2, 3];
function maps(x) {
    return x.map(n => n * 2);
}

console.log(maps(x))