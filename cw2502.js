//25.02
//School Paperwork
function paperwork(n, m) {
    if (m < 0 || n < 0) {
        return 0;
    }
    return n * m;
}

console.log(paperwork(3,5));
console.log(paperwork(3,-5));