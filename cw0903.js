//09.03
//sentenceSmash

function smash (words) {
    if (words.length===0){
       return "";
      } else {
       return words.join(" ");
  }
}        

console.log(smash(["this", "is", "a", "really", "long", "sentence"]));


//convertAbooleanToAString

function booleanToString(b){
    console.log('nice');
    return b.toString();
}

console.log(booleanToString(typeof.123));

//stringsStringsStringsEasy

Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString =
    function () { return JSON.stringify(this); }

