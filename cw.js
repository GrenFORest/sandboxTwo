//23.02 Counting sheep
function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if ( arrayOfSheep[i]) {
        count++;
      }
    }
    return count;
  }