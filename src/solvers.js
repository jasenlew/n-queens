/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

window.findNRooksSolution = function(n) {


};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
window.countNRooksSolutions = function(n) {

var boardsCounter = 0;
  var placedRooks = 0;
  var alreadyOccupiedColumns = {};

  var iterateOverRow = function (row) {
    var row = row || 0;
    var column = 0;

    while (column < n) {
      if (!alreadyOccupiedColumns[column]) {
        placedRooks++;
        if (placedRooks === n) {
          boardsCounter++;
        }
        alreadyOccupiedColumns[column] = true;
        if ((row + 1) < n) {
          iterateOverRow(row+1);
        }
        placedRooks--;
        delete alreadyOccupiedColumns[column];
      }

      column++;
    }
    return;
  };

  iterateOverRow();

  return boardsCounter;

};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  var getAttackedSquares(rowIndex, colIndex, addOrRemove) {};
  var addSquaresToAttackedSquares(squares) {};
  var removeSquaresFromAttackedSquares(squares) {};

  var boardsCounter = 0;
  var placedQueens = 0;
  var alreadyAttackedSquares = {};

  var iterateOverRow = function (row) {
    var row = row || 0;
    var column = 0;

    while (column < n) {
      var square = JSON.stringify([row, column]);
      if (alreadyAttackedSquares[square] === 0) {
        placedQueens++;

        if (placedQueens === n) {
          boardsCounter++;
        }

        getAttackedSquares(row, column, addSquaresToAttackedSquares);

        if ((row + 1) < n) {
          iterateOverRow(row+1);
        }

        placedQueens--;
        getAttackedSquares(row, column, removeSquaresFromAttackedSquares);
      }

      column++;
    }
    return;
  };

  iterateOverRow();

  return boardsCounter;

};
