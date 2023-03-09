//06.03
//stringRepeat

function repeatStr (n, s) {
    let str = "";
    for (i=0;i<n;i++) {
        str += s;
    }
    return str;
}

console.log(repeatStr(12, "q6w7"));