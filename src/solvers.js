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
//

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  if (n % 2 === 0) {
    var nIs = 'even';
    var nHalf = n / 2;
  } else {
    var nIs = 'odd';
    var nHalf = Math.floor(n / 2);
  }


  var getAttackedSquares = function(rowIndex, colIndex, addOrRemove) {

    //addOrRemove(squares);
    this.storageSquares = {};
    var squares = [];
    var stringifiedQueenSquare = '[' + JSON.stringify(rowIndex) + ',' + JSON.stringify(colIndex) + ']';

    if (this.storageSquares[stringifiedQueenSquare]) {
      squares = this.storageSquares[stringifiedQueenSquare];
    } else {
      //Columns
      for (var i = rowIndex + 1; i < n; i++) {
        squares.push(JSON.stringify([i,colIndex]));
      }
      //Major diagonals
      var targetColumn = colIndex + 1;
      for (var targetRow = rowIndex + 1; targetRow < n && targetColumn < n; targetRow++) {
        squares.push(JSON.stringify([targetRow,targetColumn]));
        targetColumn++;
      }

      //Minor diagonals
      targetColumn = colIndex - 1;
      for (targetRow = rowIndex + 1; targetRow < n && targetColumn >= 0; targetRow++) {
        squares.push(JSON.stringify([targetRow,targetColumn]));
        targetColumn--;
      }

      this.storageSquares[stringifiedQueenSquare] = squares;
    }

    addOrRemove(squares);

  };

  var addSquaresToAttackedSquares = function (squares) {
    for (var i = 0, l = squares.length; i < l; i += 1) {

      if (!alreadyAttackedSquares[squares[i]]) {
        alreadyAttackedSquares[squares[i]] = 1;
      } else {
        alreadyAttackedSquares[squares[i]] += 1;
      }
    }
  };

  var removeSquaresFromAttackedSquares = function (squares) {
    for (var i = 0, l = squares.length; i < l; i += 1) {

      alreadyAttackedSquares[squares[i]] -= 1;
    }
  };

  var boardsCounter = 0;
  var placedQueens = 0;
  var alreadyAttackedSquares = {};


  var iterateOverRow = function (row) {
    var row = row || 0;
    var column = 0;

    while (column < n) {
      var square = JSON.stringify([row, column]);
      if (!alreadyAttackedSquares[square]) {
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
      if (row === 0 && column === nHalf) {
      // debugger;
        if (nIs === 'even') {
          boardsCounter = boardsCounter * 2;
          return;
        } else {
          var nHalfBoards = boardsCounter;
        }
      } else if (row === 0 && column === (nHalf + 1)) {
        boardsCounter = nHalfBoards + boardsCounter;
        return;
      }
    }
    return;
  };
  iterateOverRow();

  return boardsCounter;

};
