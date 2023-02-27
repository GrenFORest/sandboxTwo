//27.02
//vovelCount

function getCount(str) {
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (i=0;i<str.length;i++) {
        for (ii=0;ii<vowels.length;ii++) {
            if(str[i] === vowels[ii]) {
                count++;
            }
        }
    }

    return count;

}

console.log(getCount("returnatstringenumberu"));

//makeUpperCase

function makeUpperCase(str) {
    return str.toUpperCase();
}

console.log(makeUpperCase('dfkjskfnvb'));