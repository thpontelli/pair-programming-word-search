const transpose = function(matrix) {
    //  Put your solution here
      let newMatrix = [];
      //console.log(matrix);
      for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix[row].length; column++) {
          //console.log(matrix[row][column]);
          if (row === 0) {
            newMatrix[column] = [matrix[row][column]];
          } else {
            //console.log(newMatrix);
            //console.log("column", column);
            newMatrix[column].push(matrix[row][column]);
          }
        }
      }
      return newMatrix;
    };

const reverseString = function(word) {
    let wordArray = word.split('');
    return wordArray.reverse().join('');
}

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    //console.log(horizontalJoin);

    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    //console.log(verticalJoin);

    for (l of horizontalJoin) {
        if (l.includes(word)) return true
        else if (reverseString(l).includes(word)) return true
    }

    for (l of verticalJoin) {
        if (l.includes(word)) return true
        else if (reverseString(l).includes(word)) return true
    } 

    return false 
}


module.exports = wordSearch