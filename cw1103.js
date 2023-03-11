//11.03
//Find Maximum and Minimum Values of a List

let list = [4,6,2,1,9,63,-134,566];

const min = function (list) {
    let m = list[0];
    for (i=1;i<list.length;i++) {
        if (list[i] < m) m = list[i];
    }
    return m;
}

const max = function (list) {
    let m = list[0];
    for (i=1;i<list.length;i++) {
        if (list[i] > m) m = list[i];
    }
    return m;    
}

console.log(min(list), max(list));