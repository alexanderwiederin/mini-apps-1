var BLANK = 0;
var RED = 1;
var YELLOW = 2;
var WIDTH = 7;
var HEIGHT = 6;

class ConnectFour {
  constructor() {
    this.playerOne = {
      turn: undefined,
      color: RED
    };
    this.playerTwo = {
      turn: undefined,
      color: YELLOW
    };
    this.board = undefined;
    this.winner = undefined;
    this.width = WIDTH;
    this.height = HEIGHT;

    this.reset = this.reset.bind(this);
    this.getAllRows = this.getAll.bind(this);
    this.getColumn = this.getColumn.bind(this);
    this.getRow = this.getRow.bind(this);
    this.setPiece = this.setPiece.bind(this);
    this.setPlayer = this.setPlayer.bind(this);
    this.checkRowforWinner = this.checkRowforWinner.bind(this);
    this.getAllColumns = this.getAllColumns.bind(this);

    this.reset();
  }

  newBoard (height, width) {
    var board = [];

    for (var i = 0; i < HEIGHT; i++) {
      var row = [];
        for (var j = 0; j < WIDTH; j++) {
          row.push(BLANK);
        }
      board.push(row);
    }

    return board;

  }

  reset() {
    this.playerOne.turn = true;
    this.playerTwo.turn = false;
    this.board = this.newBoard(this.height, this.width);
  }

  getAllRows() {
    return this.board;
  }

  getColumn(targetColumn) {
    var result = [];
    this.board.forEach((row) => {
      row.forEach((piece, column) => {
        targetColumn === column ? result.push(piece) : null;
      });
    });
    return result;
  }

  getAllColumns() {
    var result = [];
    var columnQuantity = this.getRow(0)[0].length;
    for(var i = 0; i < columnQuantity; i++) {
      result.push(this.getColumn(i));
    }
    return result;
  }

  getRow(targetRow) {
    var result = [];
    this.board.forEach((piece, rowNumber) => {
      targetRow === rowNumber ? result.push(piece) : null;
    });
    return result;
  }

  setPlayer() {
    var player = undefined;

    if(this.playerOne.turn) {
      player = this.playerOne.color;
    } else {
      player = this.playerTwo.color;
    }

    return player;
  }

  setPiece(targetColumnNumber) {
    var player = this.setPlayer();

    var targetColumn = this.getColumn(targetColumnNumber);
    for (var i = 0; i < targetColumn.length; i++) {
      if (i === targetColumn.length - 1 && targetColumn[i] === BLANK) {
        this.board[i][targetColumnNumber] = player;
      } else if (targetColumn[i] !== BLANK) {
        this.board[i - 1][targetColumnNumber] = player;
        return;
      }
    }
  }

  checkRowsForWinner(rowArray) {

  } 

  checkColumnsForWinner(rowArray) {
    
  }  

}

// export default connectFour;