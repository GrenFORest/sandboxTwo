//15.03
//listFiltering

function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
}

console.log(filter_list([1,2,'aasf','1','123',123]));