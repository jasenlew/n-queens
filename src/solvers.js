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

  var board = [];

  var boardMaker = function(n, iteration) {

    iteration = iteration || 0;

    var newRow = [];

    var fillRowWithZeros = function() {
      newRow.push(0);
      if (newRow.length < n) {
        fillRowWithZeros();
      }
    };

    fillRowWithZeros();
    board.push(newRow);

    if (iteration < n) {
      boardMaker(n, iteration + 1);
    }
  };

// (1) r
// (2) c

//if c is not in alreadyOccupiedColumns
  //then place a '1' at c r
  //record [c, r] in board
  //if board.length === n
    //boards.push(board)
  //add c to alreadyOccupiedColumns
  //if r + 1 < n
    //go to (1),adding r + 1, c: 0 to the stack
  // (3)
  // pop one element off of board
  // pop one element of alreadyOccupiedColumns
  // else
    // add board to boards

// if c + 1 < n
  // go to (2) with c + 1
// else
  // return this call: go to (3)


  var boardsCounter = 0;
  var placedRooks = 0;
  var alreadyOccupiedColumns = {};

  var iterateOverRow = function (row) {
    var row = row || 0;
    var column = 0;

    while (column < n) {
      if (!alreadyOccupiedColumns[column]) {
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

      if ((column + 1) < n) {
        column++;
      }
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
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
