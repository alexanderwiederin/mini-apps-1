var BLANK = 0;
var RED = 1;
var YELLOW = 2;
var WIDTH = 7;
var HEIGHT = 6;

class ConnectFour {
  constructor() {
    this.playerOne = undefined;
    this.playerOneColor = RED;
    this.playerTwo = undefined;
    this.playerTwoColor = YELLOW;
    this.board = undefined;
    this.winnder = undefined;
    this.width = WIDTH;
    this.height = HEIGHT;

    this.reset = this.reset.bind(this);
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
    this.playerOne = true;
    this.playerTwo = false;

  }
}

export default connectFour;