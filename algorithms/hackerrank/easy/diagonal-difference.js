export function diagonalDifference(arr) {
    var firstDiagonal = 0;
    var secondDiagonal = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i === j) {
                firstDiagonal += arr[i][j];
            }
            if (i + j === arr.length - 1) {
                secondDiagonal += arr[i][j];
            }
        }
    }
    return Math.abs(firstDiagonal - secondDiagonal);
}

//console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]));