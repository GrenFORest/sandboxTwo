//26.02
//Add Two Numbers with JavaScript
const sum = 10 + 10;
//Subtract One Number from Another with JavaScript
const difference = 45 - 33;
//Multiply Two Numbers with JavaScript
const product = 8 * 10;
//Divide One Number by Another with JavaScript
const quotient = 66 / 33;
//Increment a Number with JS
let myVar = 87;
myVar = ++myVar;

console.log(myVar);
//Compare Scopes of the var and let Keywords
function checkScope() {
    let i = 'function scope';
    if(true) {
        let i = 'block scope';
        console.log('Block scope i is:', i);
    }
    console.log('Function scope i is:', i);
    return i;
}

checkScope();
